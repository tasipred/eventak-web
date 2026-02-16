from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
import os

# Register fonts
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')

# Create document
doc = SimpleDocTemplate(
    "/home/z/my-project/download/eventak_mock_data_audit_report.pdf",
    pagesize=A4,
    title="Eventak Mock Data Audit Report",
    author="Z.ai",
    creator="Z.ai",
    subject="Production Readiness Audit - Mock Data and Fallbacks"
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    name='CustomTitle',
    fontName='Times New Roman',
    fontSize=28,
    leading=34,
    alignment=TA_CENTER,
    spaceAfter=30
)

heading1_style = ParagraphStyle(
    name='Heading1Custom',
    fontName='Times New Roman',
    fontSize=18,
    leading=24,
    alignment=TA_LEFT,
    spaceAfter=12,
    spaceBefore=20,
    textColor=colors.HexColor('#1F4E79')
)

heading2_style = ParagraphStyle(
    name='Heading2Custom',
    fontName='Times New Roman',
    fontSize=14,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=8,
    spaceBefore=14,
    textColor=colors.HexColor('#2E75B6')
)

body_style = ParagraphStyle(
    name='BodyCustom',
    fontName='Times New Roman',
    fontSize=11,
    leading=16,
    alignment=TA_LEFT,
    spaceAfter=8
)

critical_style = ParagraphStyle(
    name='CriticalStyle',
    fontName='Times New Roman',
    fontSize=11,
    leading=16,
    alignment=TA_LEFT,
    spaceAfter=8,
    textColor=colors.HexColor('#C00000')
)

warning_style = ParagraphStyle(
    name='WarningStyle',
    fontName='Times New Roman',
    fontSize=11,
    leading=16,
    alignment=TA_LEFT,
    spaceAfter=8,
    textColor=colors.HexColor('#BF8F00')
)

# Table styles
header_style = ParagraphStyle(
    name='TableHeader',
    fontName='Times New Roman',
    fontSize=10,
    textColor=colors.white,
    alignment=TA_CENTER
)

cell_style = ParagraphStyle(
    name='TableCell',
    fontName='Times New Roman',
    fontSize=9,
    textColor=colors.black,
    alignment=TA_LEFT
)

cell_center = ParagraphStyle(
    name='TableCellCenter',
    fontName='Times New Roman',
    fontSize=9,
    textColor=colors.black,
    alignment=TA_CENTER
)

story = []

# Title Page
story.append(Spacer(1, 120))
story.append(Paragraph("<b>Eventak Production Readiness Audit</b>", title_style))
story.append(Spacer(1, 20))
story.append(Paragraph("<b>Mock Data &amp; Fallback Analysis Report</b>", ParagraphStyle(
    name='Subtitle',
    fontName='Times New Roman',
    fontSize=16,
    leading=20,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#666666')
)))
story.append(Spacer(1, 60))
story.append(Paragraph("Repository: tasipred/eventak.", ParagraphStyle(
    name='RepoInfo',
    fontName='Times New Roman',
    fontSize=12,
    leading=16,
    alignment=TA_CENTER
)))
story.append(Paragraph("Audit Date: February 2025", ParagraphStyle(
    name='DateInfo',
    fontName='Times New Roman',
    fontSize=12,
    leading=16,
    alignment=TA_CENTER
)))
story.append(Paragraph("Status: <font color='#C00000'><b>NOT PRODUCTION READY</b></font>", ParagraphStyle(
    name='StatusInfo',
    fontName='Times New Roman',
    fontSize=14,
    leading=18,
    alignment=TA_CENTER
)))
story.append(PageBreak())

# Executive Summary
story.append(Paragraph("<b>1. Executive Summary</b>", heading1_style))
story.append(Paragraph(
    "This audit was conducted to identify mock data, fallback mechanisms, and non-production code in the Eventak system. "
    "The analysis revealed <b>multiple critical issues</b> that prevent the system from being considered production-grade. "
    "The codebase contains extensive mock services, hardcoded test credentials, simulation logic, and fallback mechanisms "
    "that must be addressed before production deployment.",
    body_style
))
story.append(Spacer(1, 12))

# Summary Table
summary_data = [
    [Paragraph('<b>Category</b>', header_style), Paragraph('<b>Count</b>', header_style), Paragraph('<b>Severity</b>', header_style)],
    [Paragraph('Mock Service Files', cell_style), Paragraph('3', cell_center), Paragraph('CRITICAL', cell_center)],
    [Paragraph('Hardcoded Test Credentials', cell_style), Paragraph('3 users', cell_center), Paragraph('CRITICAL', cell_center)],
    [Paragraph('Simulation/Fallback Logic', cell_style), Paragraph('5 locations', cell_center), Paragraph('HIGH', cell_center)],
    [Paragraph('Mock Data Generators', cell_style), Paragraph('2 files', cell_center), Paragraph('HIGH', cell_center)],
    [Paragraph('Quick Test Access UI', cell_style), Paragraph('1 location', cell_center), Paragraph('MEDIUM', cell_center)],
]

summary_table = Table(summary_data, colWidths=[200, 80, 100])
summary_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#FFF2CC')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#FFF2CC')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(summary_table)
story.append(Spacer(1, 6))
story.append(Paragraph("<b>Table 1.</b> Summary of Findings", ParagraphStyle(
    name='Caption',
    fontName='Times New Roman',
    fontSize=10,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#666666')
)))
story.append(Spacer(1, 24))

# Critical Issues Section
story.append(Paragraph("<b>2. Critical Issues (Must Fix Immediately)</b>", heading1_style))

# Issue 2.1
story.append(Paragraph("<b>2.1 Mock Firestore Database Service</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>server/services/mockFirestore.js</font>", critical_style))
story.append(Paragraph(
    "This file implements a complete in-memory mock database that mimics Firestore behavior. "
    "It includes mock implementations for collections, documents, queries, and batch operations. "
    "The mock stores all data in memory and loses everything on restart. While the system has a flag "
    "to switch between mock and real database, the presence of this file and its usage patterns indicate "
    "testing code that should not exist in production.",
    body_style
))
story.append(Paragraph("<b>Key Problems:</b>", body_style))
story.append(Paragraph("- In-memory storage with no persistence", body_style))
story.append(Paragraph("- Mock admin SDK with fake FieldValue operations", body_style))
story.append(Paragraph("- Triggered by environment variable USE_MOCK_DB=true", body_style))
story.append(Spacer(1, 12))

# Issue 2.2
story.append(Paragraph("<b>2.2 Frontend Mock Backend Service</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>src/services/mockBackend.js</font>", critical_style))
story.append(Paragraph(
    "This is the most critical issue. The frontend uses a completely mock backend that stores data in "
    "localStorage. It includes hardcoded test users, mock vendor generation, auto-bidding simulation, "
    "and fake API responses. The AuthContext.jsx directly imports and uses this mock service, meaning "
    "the frontend is NOT connected to the real backend API.",
    body_style
))
story.append(Paragraph("<b>Hardcoded Test Users:</b>", body_style))

users_data = [
    [Paragraph('<b>Email</b>', header_style), Paragraph('<b>Password</b>', header_style), Paragraph('<b>Role</b>', header_style)],
    [Paragraph('admin@test.com', cell_style), Paragraph('123', cell_style), Paragraph('admin', cell_style)],
    [Paragraph('client@test.com', cell_style), Paragraph('123', cell_style), Paragraph('client', cell_style)],
    [Paragraph('vendor@test.com', cell_style), Paragraph('123', cell_style), Paragraph('vendor', cell_style)],
]
users_table = Table(users_data, colWidths=[150, 100, 100])
users_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#C00000')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, -1), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
]))
story.append(users_table)
story.append(Spacer(1, 6))
story.append(Paragraph("<b>Table 2.</b> Hardcoded Test Credentials in mockBackend.js", ParagraphStyle(
    name='Caption',
    fontName='Times New Roman',
    fontSize=10,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#666666')
)))
story.append(Spacer(1, 12))

# Issue 2.3
story.append(Paragraph("<b>2.3 Mock Vendor Generator</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>src/services/mockVendors.js</font>", critical_style))
story.append(Paragraph(
    "This file generates fake vendor data programmatically. It creates 100+ mock vendors with random "
    "Arabic names, fake phone numbers, random service categories, and placeholder portfolio images from "
    "Unsplash. These vendors are used by the mockBackend to simulate vendor matching and bidding.",
    body_style
))
story.append(Paragraph("<b>Problems:</b>", body_style))
story.append(Paragraph("- Generates 3 vendors per service category per city (100+ total)", body_style))
story.append(Paragraph("- Uses external Unsplash images without permission", body_style))
story.append(Paragraph("- Creates fake phone numbers with random digits", body_style))
story.append(PageBreak())

# High Priority Issues
story.append(Paragraph("<b>3. High Priority Issues</b>", heading1_style))

# Issue 3.1
story.append(Paragraph("<b>3.1 AI Service Fallback Mechanisms</b>", heading2_style))
story.append(Paragraph("<b>Files:</b> <font face='Courier'>gateway/services/gemini.py</font>, <font face='Courier'>gateway/services/deepseek.py</font>", warning_style))
story.append(Paragraph(
    "Both AI services (Gemini and DeepSeek) have fallback methods that return mock responses when the "
    "API fails or is not configured. These fallbacks return generic Arabic error messages but still "
    "provide structured data that could be processed incorrectly.",
    body_style
))
story.append(Paragraph("<b>Example from deepseek.py (lines 294-302):</b>", body_style))
story.append(Paragraph(
    "def _mock_fallback(self, text: str, debug_error=''):<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;return {<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'intent': 'NEW_REQUEST',<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'service_category': 'Unknown',<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'location': 'Unknown',<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'date': 'Unknown',<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'missing_info': ['service_category'],<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'reply_message': '...'<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;}",
    ParagraphStyle(name='Code', fontName='Courier', fontSize=9, leading=12, leftIndent=20)
))
story.append(Spacer(1, 12))

# Issue 3.2
story.append(Paragraph("<b>3.2 Backend Service Request Fallback</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>gateway/services/backend.py</font> (lines 40-42)", warning_style))
story.append(Paragraph(
    "When the Node.js backend is unreachable, the gateway service returns a random request ID instead "
    "of properly failing. This could lead to customers tracking non-existent requests.",
    body_style
))
story.append(Paragraph(
    "except Exception as e:<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;print(f'Failed to create request: {e}')<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;import random<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;return {'requestId': str(random.randint(100000, 999999))}",
    ParagraphStyle(name='Code', fontName='Courier', fontSize=9, leading=12, leftIndent=20)
))
story.append(Spacer(1, 12))

# Issue 3.3
story.append(Paragraph("<b>3.3 Hardcoded Default Client Phone</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>gateway/services/store.py</font> (line 10)", warning_style))
story.append(Paragraph(
    "The StoreService class has a hardcoded fallback client phone number that serves as a default. "
    "This appears to be a test phone number that should not exist in production.",
    body_style
))
story.append(Paragraph(
    "self.last_active_client = '966551315886' # Default Fallback",
    ParagraphStyle(name='Code', fontName='Courier', fontSize=9, leading=12, leftIndent=20)
))
story.append(Spacer(1, 12))

# Issue 3.4
story.append(Paragraph("<b>3.4 Random Bid Amount Calculation</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>server/controllers/requestsController.js</font> (lines 4-8)", warning_style))
story.append(Paragraph(
    "The bid amount calculation uses Math.random() to generate prices. This is simulation logic that "
    "should not exist in a production system where vendors should set their own prices.",
    body_style
))
story.append(Paragraph(
    "const calculateBidAmount = (budget) => {<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;const base = budget || 5000;<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;return Math.floor(base * (0.8 + Math.random() * 0.4));<br/>"
    "};",
    ParagraphStyle(name='Code', fontName='Courier', fontSize=9, leading=12, leftIndent=20)
))
story.append(PageBreak())

# Medium Priority Issues
story.append(Paragraph("<b>4. Medium Priority Issues</b>", heading1_style))

# Issue 4.1
story.append(Paragraph("<b>4.1 Quick Test Access Buttons in Login UI</b>", heading2_style))
story.append(Paragraph("<b>File:</b> <font face='Courier'>src/pages/Login.jsx</font> (lines 82-90)", warning_style))
story.append(Paragraph(
    "The login page contains 'Quick Access for Tester' buttons that auto-fill test credentials. "
    "While convenient for development, these should be removed or conditionally rendered only in "
    "development mode.",
    body_style
))
story.append(Paragraph(
    "{/* Quick Access for Tester */}<br/>"
    "&lt;div className='mt-8 pt-6 border-t border-dashed border-gray-200'&gt;<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className='text-xs text-center text-gray-400 mb-3'&gt;وصول سريع للاختبار&lt;/p&gt;<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className='flex gap-2 justify-center text-xs'&gt;<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; { setFormData({ email: 'client@test.com', password: '123' }); }}&gt;...<br/>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>"
    "&lt;/div&gt;",
    ParagraphStyle(name='Code', fontName='Courier', fontSize=9, leading=12, leftIndent=20)
))
story.append(Spacer(1, 24))

# Recommendations
story.append(Paragraph("<b>5. Recommendations</b>", heading1_style))

story.append(Paragraph("<b>5.1 Immediate Actions Required</b>", heading2_style))
story.append(Paragraph(
    "1. <b>Replace mockBackend.js with real API calls:</b> The frontend AuthContext and all components "
    "must be updated to call the real backend API endpoints instead of using localStorage mock data.",
    body_style
))
story.append(Paragraph(
    "2. <b>Remove mockFirestore.js:</b> Ensure the production environment never has USE_MOCK_DB=true "
    "and consider removing the mock file entirely from the codebase.",
    body_style
))
story.append(Paragraph(
    "3. <b>Delete mockVendors.js:</b> All vendor data must come from the real database. Remove this "
    "generator completely.",
    body_style
))
story.append(Paragraph(
    "4. <b>Remove hardcoded credentials:</b> Delete the test users from mockBackend.js and ensure "
    "the database has proper user authentication.",
    body_style
))
story.append(Spacer(1, 12))

story.append(Paragraph("<b>5.2 Architecture Changes Needed</b>", heading2_style))
story.append(Paragraph(
    "1. <b>Implement proper API service layer:</b> Create a dedicated API service (e.g., api.js) that "
    "handles all HTTP communication with the backend, with proper error handling and authentication.",
    body_style
))
story.append(Paragraph(
    "2. <b>Remove simulation logic:</b> The random bid generation, auto-bidding simulation, and fake "
    "vendor matching must be replaced with real business logic.",
    body_style
))
story.append(Paragraph(
    "3. <b>Environment-based configuration:</b> Use proper environment variables to distinguish between "
    "development, staging, and production environments.",
    body_style
))
story.append(Spacer(1, 12))

story.append(Paragraph("<b>5.3 Fallback Strategy</b>", heading2_style))
story.append(Paragraph(
    "For AI services, instead of returning mock data on failure, implement proper error handling that "
    "informs the user of the issue and suggests retry. For backend connectivity, implement circuit "
    "breaker patterns and proper health checks rather than returning fake request IDs.",
    body_style
))
story.append(PageBreak())

# Affected Files Summary
story.append(Paragraph("<b>6. Complete List of Affected Files</b>", heading1_style))

files_data = [
    [Paragraph('<b>File Path</b>', header_style), Paragraph('<b>Issue Type</b>', header_style), Paragraph('<b>Action</b>', header_style)],
    [Paragraph('server/services/mockFirestore.js', cell_style), Paragraph('Mock Service', cell_style), Paragraph('DELETE', cell_style)],
    [Paragraph('src/services/mockBackend.js', cell_style), Paragraph('Mock Service', cell_style), Paragraph('DELETE', cell_style)],
    [Paragraph('src/services/mockVendors.js', cell_style), Paragraph('Mock Generator', cell_style), Paragraph('DELETE', cell_style)],
    [Paragraph('src/context/AuthContext.jsx', cell_style), Paragraph('Uses Mock', cell_style), Paragraph('REFACTOR', cell_style)],
    [Paragraph('src/pages/Login.jsx', cell_style), Paragraph('Test UI', cell_style), Paragraph('CLEANUP', cell_style)],
    [Paragraph('gateway/services/backend.py', cell_style), Paragraph('Fallback', cell_style), Paragraph('FIX', cell_style)],
    [Paragraph('gateway/services/gemini.py', cell_style), Paragraph('Fallback', cell_style), Paragraph('FIX', cell_style)],
    [Paragraph('gateway/services/deepseek.py', cell_style), Paragraph('Fallback', cell_style), Paragraph('FIX', cell_style)],
    [Paragraph('gateway/services/store.py', cell_style), Paragraph('Hardcoded', cell_style), Paragraph('FIX', cell_style)],
    [Paragraph('server/controllers/requestsController.js', cell_style), Paragraph('Simulation', cell_style), Paragraph('REFACTOR', cell_style)],
    [Paragraph('server/app.js', cell_style), Paragraph('Mock Seeding', cell_style), Paragraph('CLEANUP', cell_style)],
]

files_table = Table(files_data, colWidths=[200, 100, 100])
files_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('BACKGROUND', (0, 6), (-1, 6), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 7), (-1, 7), colors.white),
    ('BACKGROUND', (0, 8), (-1, 8), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 9), (-1, 9), colors.white),
    ('BACKGROUND', (0, 10), (-1, 10), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 11), (-1, 11), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
]))
story.append(files_table)
story.append(Spacer(1, 6))
story.append(Paragraph("<b>Table 3.</b> Complete List of Affected Files and Required Actions", ParagraphStyle(
    name='Caption',
    fontName='Times New Roman',
    fontSize=10,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#666666')
)))
story.append(Spacer(1, 24))

# Conclusion
story.append(Paragraph("<b>7. Conclusion</b>", heading1_style))
story.append(Paragraph(
    "The Eventak system is <b>NOT PRODUCTION READY</b>. The codebase contains extensive mock data, "
    "hardcoded test credentials, simulation logic, and fallback mechanisms that must be addressed "
    "before any production deployment. The most critical issue is that the frontend is currently "
    "using a mock backend (localStorage) instead of connecting to the real Node.js API.",
    body_style
))
story.append(Paragraph(
    "Priority should be given to removing the mock services (mockBackend.js, mockFirestore.js, "
    "mockVendors.js) and refactoring the frontend to use proper API calls. All hardcoded credentials "
    "must be removed, and proper error handling should replace the current fallback mechanisms.",
    body_style
))
story.append(Spacer(1, 30))

# Build the document
doc.build(story)
print("PDF report generated successfully!")
