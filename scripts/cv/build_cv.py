"""Rebuild Santiago Molano's CV (ES/EN) replicating the original layout.

Usage: python3 scripts/cv/build_cv.py public/cv  (requires reportlab + Liberation Sans fonts)
"""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, PageTemplate, Paragraph, Table,
                                TableStyle, Spacer, ListFlowable, ListItem, KeepTogether)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib import colors
from reportlab.platypus.flowables import HRFlowable

FD = "/usr/share/fonts/truetype/liberation/"
pdfmetrics.registerFont(TTFont("LiberationSans", FD + "LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("LiberationSans-Bold", FD + "LiberationSans-Bold.ttf"))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("LiberationSans", normal="LiberationSans", bold="LiberationSans-Bold")

BG = colors.Color(0.952941, 0.94902, 0.929412)
W, H = A4

name_st = ParagraphStyle("name", fontName="LiberationSans", fontSize=21.15, leading=25, alignment=TA_CENTER)
summ_st = ParagraphStyle("summ", fontName="LiberationSans", fontSize=10, leading=12, alignment=TA_JUSTIFY)
contact_st = ParagraphStyle("contact", fontName="LiberationSans-Bold", fontSize=8.96, leading=14.5, alignment=TA_CENTER)
label_st = ParagraphStyle("label", fontName="LiberationSans", fontSize=10.5, leading=12.8)
title_st = ParagraphStyle("title", fontName="LiberationSans-Bold", fontSize=10.55, leading=12.8)
body_st = ParagraphStyle("body", fontName="LiberationSans", fontSize=10.8, leading=12.1)
bullet_st = ParagraphStyle("bullet", parent=body_st, alignment=TA_JUSTIFY)

LEFT_X, RIGHT_X, RIGHT_END = 71, 225, 550
COL1 = RIGHT_X - LEFT_X
COL2 = RIGHT_END - RIGHT_X


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet_st), leftIndent=17, value="•") for t in items],
        bulletType="bullet", start="•", bulletFontName="LiberationSans", bulletFontSize=10,
        leftIndent=17, bulletOffsetY=0, bulletDedent=8)


def entry(title, lines, items=None):
    parts = [Paragraph(title, title_st)] + [Paragraph(l, body_st) for l in lines]
    if items:
        parts += [bullets([it]) for it in items]
    return parts


def section(label, blocks, gap=11):
    """One table per entry (label only on the first); each entry kept together on a page."""
    out = []
    for bi, b in enumerate(blocks):
        rows = [["", Paragraph(label if (bi == 0 and pi == 0) else "", label_st), flow] for pi, flow in enumerate(b)]
        t = Table(rows, colWidths=[LEFT_X - 31, COL1, COL2], hAlign="LEFT")
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]))
        out.append(KeepTogether([t, Spacer(1, gap if bi < len(blocks) - 1 else 0)]))
    return out


def rule():
    return HRFlowable(width=564 - 31, thickness=1.4, color=colors.black, spaceBefore=8, spaceAfter=14)


def bg(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BG)
    canvas.rect(0, 0, W, H, stroke=0, fill=1)
    canvas.restoreState()


def build(c, out):
    doc = BaseDocTemplate(out, pagesize=A4, leftMargin=31, rightMargin=31, topMargin=24, bottomMargin=30,
                          title="Santiago Molano Holguín - CV", author="Santiago Molano Holguín")
    full = Frame(31, 30, W - 62, H - 54, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[full], onPage=bg)])

    head_inner = [
        Paragraph("SANTIAGO MOLANO HOLGUÍN", name_st), Spacer(1, 8),
        Paragraph(c["summary"], summ_st), Spacer(1, 3),
        Paragraph(
            '+57 3243638746 &nbsp;&nbsp;|&nbsp;&nbsp; s.molano0818@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; '
            '<a href="https://www.linkedin.com/in/molanosantiago/"><u>linkedin.com/in/molanosantiago/</u></a>'
            f' &nbsp;&nbsp;|&nbsp;&nbsp; <a href="https://molxno.dev/"><u>{c["portfolio"]}</u></a>', contact_st),
        Paragraph("KR 49A 37A 19, Copacabana, Antioquia", contact_st),
    ]
    head = Table([[head_inner]], colWidths=[534 - 61])
    head.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))

    story = [head, HRFlowable(width=564 - 31, thickness=1.4, color=colors.black, spaceBefore=6, spaceAfter=14)]

    def indent(flow):
        t = Table([[flow]], colWidths=[RIGHT_END - LEFT_X])
        t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), LEFT_X - 31), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                               ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
        return t

    story.extend(section(c["exp_label"], [entry(*e) for e in c["experience"]]))
    story.append(rule())
    story.extend(section(c["edu_label"], [entry(*e) for e in c["education"]], gap=9))
    story.append(rule())
    story.extend(section(c["skills_label"], [[bullets([x]) for x in c["skills"]]]))
    story.append(rule())
    story.extend(section(c["extra_label"], [[bullets([x]) for x in c["extra"]]]))
    doc.build(story)


ES = dict(
    summary=("Desarrollador fullstack con más de 4 años de experiencia construyendo software escalable para banca, "
             "tecnología financiera y salud digital. Especialista backend en Laravel (PHP), con experiencia en Kotlin "
             "(Android Jetpack Compose) y Vue (TypeScript). Fuerte en arquitectura limpia y hexagonal, AWS y SQL. "
             "Capacidad comprobada para asumir proyectos de principio a fin y liderar técnicamente. Busco asumir "
             "roles de liderazgo técnico donde pueda tomar decisiones de arquitectura, mejorar procesos y escalar "
             "soluciones críticas en ambientes exigentes."),
    portfolio="portafolio web",
    exp_label="EXPERIENCIA LABORAL", edu_label="EDUCACIÓN", skills_label="HABILIDADES",
    extra_label="INFORMACIÓN ADICIONAL",
    experience=[
        ("DESARROLLADOR BACKEND", ["Alternova Inc | Tiempo completo", "Mayo 2023 - Actualmente"], [
            "BAM Guatemala: lideré el backend del sistema de corresponsales bancarios durante todo su ciclo de vida "
            "(despliegues, bugs, nuevas funcionalidades). Hoy soy responsable único de todo el proyecto: backend "
            "(Laravel/PHP), mobile Android (Kotlin, Jetpack Compose) y web (Vue, TypeScript).",
            "Mantenimiento de la plataforma, corrección de bugs e implementación de nuevas funcionalidades en mobile y web.",
            "Nequi Guatemala: integré Nequi dentro de BAM y construí un desarrollo a la medida que permite independencia "
            "contractual en el tiempo con Grupo Cibest, para que Nequi opere con su propio modelo de corresponsalía "
            "bancaria y no bajo el amparo de la app BAM.",
            "Desarrollé el backend de Nequi con las últimas versiones de Laravel y PHP bajo arquitectura hexagonal y "
            "servicios de AWS (Cognito, VPC endpoints, CloudWatch, EC2, SNS, SES) para comunicarme con la API de Nequi.",
            "Implementé arquitectura limpia y control de vulnerabilidades OWASP, garantizando alta disponibilidad y "
            "seguridad en ambientes productivos bancarios.",
            "Implementación y corrección de pipelines de despliegue en AWS EC2 con Packer para Laravel/PHP.",
            "Sky: backend de una plataforma de salud digital para el tratamiento de pacientes con TDAH: juegos "
            "terapéuticos interactivos con Laravel y parte administrativa con Django (métricas, pacientes, actividad, "
            "progreso, especialistas).",
            "Guié técnicamente a un desarrollador junior, coordinando tareas y revisiones de código como líder informal del proyecto.",
            "Participación en otros proyectos con Django y FastAPI.",
        ]),
        ("DESARROLLADOR FULLSTACK", ["Sportta S.A.S | Tiempo completo", "Enero 2023 - Mayo 2023"], [
            "Desarrollé y mantuve la app móvil y web (React/React Native + Laravel) para usuarios fitness.",
            "Automatización del ciclo de despliegue (CI/CD), reduciendo errores y tiempo de entrega en producción.",
            "Reestructuré la base de datos relacional para optimizar el rendimiento y escalabilidad.",
        ]),
        ("ANALISTA DE OPERACIONES | DESARROLLADOR FULLSTACK", ["BTG Pactual Colombia | Prácticas laborales", "Julio 2022 - Enero 2023"], [
            "Resolví incidentes críticos en producción a nivel SQL, asegurando disponibilidad en operaciones bancarias.",
            "Canalicé bugs funcionales con el proveedor externo, generando reportes en Jira y facilitando solución rápida.",
            "Automatización de limpieza de procedimientos almacenados duplicados, mejorando mantenibilidad del sistema.",
        ]),
    ],
    education=[
        ("CERTIFICADO DE CIBERSEGURIDAD GOOGLE", ["Coursera | 2024"]),
        ("INGENIERÍA EN SISTEMAS", ["Institución Universitaria ITM | Actualmente"]),
        ("TÉCNICO EN PROGRAMACIÓN DE SOFTWARE", ["SENA | 2022"]),
        ("TÉCNICO EN CONTABILIZACIÓN DE OPERACIONES COMERCIALES Y FINANCIERAS", ["SENA | 2020"]),
    ],
    skills=[
        "Especialidades: PHP (Laravel), Kotlin (Android, Jetpack Compose), Vue (TypeScript)",
        "Arquitectura: Arquitectura Limpia, Arquitectura Hexagonal, Microservicios, SOLID",
        "Lenguajes y Frameworks: PHP (Laravel), Kotlin, TypeScript, Python (Django, FastAPI), JavaScript (Vue, React, React Native)",
        "Cloud y DevOps: AWS (Cognito, VPC endpoints, CloudWatch, EC2, SNS, SES), Azure, GCP, Docker, GitHub Actions, Packer, CI/CD",
        "Bases de datos: SQL (MySQL, PostgreSQL), Supabase",
        "Seguridad: OWASP, Certificado de Ciberseguridad Google",
        "Herramientas: Jira, Slack, Git, GitHub, GitLab, ClickUp, AWS, Azure",
        "Otros: Mantenimiento de hardware y software, soporte técnico",
    ],
    extra=[
        "Idiomas: Español (nativo), Inglés (B2), Alemán (A1)",
        "Disponibilidad: Abierto a roles remotos, híbridos y presenciales; facilidad para trasladarme de ciudad",
        "Perfil: Desarrollador de software con experiencia en frontend y backend (el backend es mi especialidad), con "
        "trayectoria en salud digital y tecnología financiera, y estudios en ciberseguridad; preparado para roles de liderazgo técnico",
        "Computador propio; licencia de conducción particular (moto y carro)",
    ],
)

EN = dict(
    summary=("Fullstack developer with 4+ years of experience building scalable solutions for banking, fintech, and digital "
             "health. Backend specialist in Laravel (PHP), also working with Kotlin (Android Jetpack Compose) and Vue "
             "(TypeScript). Strong in clean and hexagonal architecture, AWS, and SQL. Proven ability to own projects "
             "end to end and lead technically. Seeking to step into a Tech Lead or Software Architect role where I can "
             "contribute with architectural decisions, team mentorship, and technical excellence."),
    portfolio="web portfolio",
    exp_label="WORK EXPERIENCE", edu_label="EDUCATION", skills_label="SKILLS", extra_label="ADDITIONAL INFORMATION",
    experience=[
        ("BACKEND DEVELOPER", ["Alternova Inc | Full time", "May 2023 - Present"], [
            "BAM Guatemala: led backend development of the banking correspondent system across its entire lifecycle "
            "(deployments, critical bugs, new functionalities). I now own the entire project as the only developer: "
            "backend (Laravel/PHP), Android mobile (Kotlin, Jetpack Compose) and web (Vue, TypeScript).",
            "Maintain the platform, fix bugs, and implement new features on mobile and web.",
            "Nequi Guatemala: integrated Nequi into BAM and built a custom development that provides contractual "
            "independence over time with Grupo Cibest, so Nequi operates as a separate banking correspondent business "
            "model instead of under the BAM app.",
            "Built the Nequi backend with the latest Laravel and PHP using hexagonal architecture and AWS services "
            "(Cognito, VPC endpoints, CloudWatch, EC2, SNS, SES) to communicate with the Nequi API.",
            "Implemented clean architecture and OWASP vulnerability control, ensuring high availability and security in "
            "productive banking environments.",
            "Implemented and fixed deployment pipelines on AWS EC2 with Packer for Laravel/PHP.",
            "Sky: backend of a digital health platform for ADHD patient treatment: interactive therapeutic games with "
            "Laravel and the administrative side with Django (metrics, patients, activity, progress, specialists).",
            "Technically guided a junior developer, coordinating tasks and code reviews as an informal project leader.",
            "Worked on additional projects using Django and FastAPI.",
        ]),
        ("FULLSTACK DEVELOPER", ["Sportta S.A.S | Full time", "January 2023 - May 2023"], [
            "Developed and maintained the mobile and web app (React/React Native + Laravel) for athletes.",
            "Deployment cycle automation (CI/CD), reducing errors and delivery time in production.",
            "Restructured relational database to optimize performance and scalability.",
        ]),
        ("OPERATIONS ANALYST | FULLSTACK DEVELOPER", ["BTG Pactual Colombia | Internship", "July 2022 - January 2023"], [
            "Resolved critical incidents in production at SQL level, ensuring availability in banking operations.",
            "Channeled functional bugs with the external provider, generating reports in Jira and facilitating a quick solution.",
            "Automated cleanup of duplicate stored procedures, improving system maintainability.",
        ]),
    ],
    education=[
        ("GOOGLE CYBERSECURITY CERTIFICATE", ["Coursera | 2024"]),
        ("SYSTEM ENGINEERING", ["Institución Universitaria ITM | Present"]),
        ("SOFTWARE PROGRAMMING TECHNICIAN", ["SENA | 2022"]),
        ("TECHNICIAN IN ACCOUNTING FOR COMMERCIAL AND FINANCIAL OPERATIONS", ["SENA | 2020"]),
    ],
    skills=[
        "Specialties: PHP (Laravel), Kotlin (Android, Jetpack Compose), Vue (TypeScript)",
        "Architecture: Clean Architecture, Hexagonal Architecture, Microservices, SOLID",
        "Languages &amp; Frameworks: PHP (Laravel), Kotlin, TypeScript, Python (Django, FastAPI), JavaScript (Vue, React, React Native)",
        "Cloud &amp; DevOps: AWS (Cognito, VPC endpoints, CloudWatch, EC2, SNS, SES), Azure, GCP, Docker, GitHub Actions, Packer, CI/CD",
        "Databases: SQL (MySQL, PostgreSQL), Supabase",
        "Security: OWASP, Google Cybersecurity Certificate",
        "Tools: Jira, Slack, Git, GitHub, GitLab, ClickUp, AWS, Azure",
        "Other: Hardware and software maintenance, technical support",
    ],
    extra=[
        "Languages: Spanish (native), English (B2), German (A1)",
        "Availability: Open to remote, hybrid, and on-site roles; able to relocate to another city",
        "Profile: Software developer comfortable in frontend and backend (backend is my specialty), experienced in "
        "digital health and financial technology, with cybersecurity studies; ready for technical leadership roles",
        "Own computer; private driver's license (motorcycle and car)",
    ],
)

if __name__ == "__main__":
    outdir = sys.argv[1]
    build(ES, f"{outdir}/Santiago_Molano_CV_ES.pdf")
    build(EN, f"{outdir}/Santiago_Molano_CV_EN.pdf")
    print("ok")
