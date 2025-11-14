const pptxgen = require("pptxgenjs");

// Tạo presentation mới
let pres = new pptxgen();

// Cấu hình kích thước slide (16:9)
pres.layout = "LAYOUT_WIDE";

// ============================================
// SLIDE 1: Title Slide - Slide tiêu đề đẹp mắt
// ============================================
let slide1 = pres.addSlide();

// Thêm background gradient đẹp
slide1.background = { fill: "0088CC" };

// Tiêu đề chính
slide1.addText("Welcome to My Presentation", {
  x: 0.5,
  y: 2.0,
  w: 9,
  h: 1.5,
  fontSize: 48,
  bold: true,
  color: "FFFFFF",
  align: "center",
  fontFace: "Arial"
});

// Phụ đề
slide1.addText("Crafted with PptxGenJS", {
  x: 0.5,
  y: 3.5,
  w: 9,
  h: 0.5,
  fontSize: 24,
  color: "F1F1F1",
  align: "center",
  italic: true
});

// Thêm hình tròn trang trí
slide1.addShape(pres.ShapeType.ellipse, {
  x: 8.5,
  y: 0.3,
  w: 1.0,
  h: 1.0,
  fill: { color: "FFD700", transparency: 30 }
});

slide1.addShape(pres.ShapeType.ellipse, {
  x: 0.5,
  y: 4.5,
  w: 0.7,
  h: 0.7,
  fill: { color: "FF6B6B", transparency: 40 }
});

// ============================================
// SLIDE 2: About Me / Introduction
// ============================================
let slide2 = pres.addSlide();

// Background màu nhẹ nhàng
slide2.background = { fill: "F8F9FA" };

// Header với màu nổi bật
slide2.addShape(pres.ShapeType.rect, {
  x: 0,
  y: 0,
  w: "100%",
  h: 1.0,
  fill: { color: "2C3E50" }
});

slide2.addText("About This Project", {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 32,
  bold: true,
  color: "FFFFFF",
  fontFace: "Arial"
});

// Content box với border đẹp
slide2.addShape(pres.ShapeType.rect, {
  x: 1.0,
  y: 1.5,
  w: 8.0,
  h: 3.0,
  fill: { color: "FFFFFF" },
  line: { color: "0088CC", width: 3 }
});

slide2.addText([
  { text: "Key Features:\n\n", options: { fontSize: 24, bold: true, color: "0088CC" } },
  { text: "✓ Easy to use and powerful\n", options: { fontSize: 18, color: "2C3E50" } },
  { text: "✓ Create professional presentations\n", options: { fontSize: 18, color: "2C3E50" } },
  { text: "✓ Programmatically generate slides\n", options: { fontSize: 18, color: "2C3E50" } },
  { text: "✓ Supports charts, tables, and images", options: { fontSize: 18, color: "2C3E50" } }
], {
  x: 1.5,
  y: 1.8,
  w: 7.0,
  h: 2.5
});

// ============================================
// SLIDE 3: Bullet Points với Icon
// ============================================
let slide3 = pres.addSlide();

// Gradient background
slide3.background = { fill: "E8F5E9" };

// Title bar
slide3.addText("Our Services", {
  x: 0.5,
  y: 0.5,
  w: 9,
  h: 0.8,
  fontSize: 36,
  bold: true,
  color: "1B5E20",
  align: "left"
});

// Underline cho title
slide3.addShape(pres.ShapeType.rect, {
  x: 0.5,
  y: 1.4,
  w: 3.0,
  h: 0.05,
  fill: { color: "4CAF50" }
});

// Service items với icon boxes
const services = [
  { title: "Web Development", desc: "Modern and responsive websites" },
  { title: "Mobile Apps", desc: "iOS and Android applications" },
  { title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
  { title: "Consulting", desc: "Expert technical guidance" }
];

services.forEach((service, index) => {
  const yPos = 2.0 + (index * 1.0);

  // Icon box
  slide3.addShape(pres.ShapeType.rect, {
    x: 1.0,
    y: yPos,
    w: 0.5,
    h: 0.5,
    fill: { color: "4CAF50" }
  });

  // Số thứ tự
  slide3.addText(`${index + 1}`, {
    x: 1.0,
    y: yPos,
    w: 0.5,
    h: 0.5,
    fontSize: 20,
    bold: true,
    color: "FFFFFF",
    align: "center",
    valign: "middle"
  });

  // Service title
  slide3.addText(service.title, {
    x: 1.7,
    y: yPos,
    w: 7.0,
    h: 0.3,
    fontSize: 20,
    bold: true,
    color: "1B5E20"
  });

  // Service description
  slide3.addText(service.desc, {
    x: 1.7,
    y: yPos + 0.3,
    w: 7.0,
    h: 0.3,
    fontSize: 14,
    color: "424242"
  });
});

// ============================================
// SLIDE 4: Table & Chart
// ============================================
let slide4 = pres.addSlide();

slide4.background = { fill: "FFF8E1" };

slide4.addText("Performance Metrics", {
  x: 0.5,
  y: 0.5,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: "F57C00"
});

// Tạo bảng đẹp
const tableData = [
  [
    { text: "Quarter", options: { bold: true, color: "FFFFFF", fill: "FF6B6B" } },
    { text: "Revenue", options: { bold: true, color: "FFFFFF", fill: "FF6B6B" } },
    { text: "Growth", options: { bold: true, color: "FFFFFF", fill: "FF6B6B" } },
    { text: "Status", options: { bold: true, color: "FFFFFF", fill: "FF6B6B" } }
  ],
  [
    { text: "Q1 2024", options: { fill: "FFE5E5" } },
    { text: "$125K", options: { fill: "FFE5E5" } },
    { text: "+15%", options: { fill: "FFE5E5", color: "2E7D32" } },
    { text: "✓ On Track", options: { fill: "FFE5E5", color: "2E7D32" } }
  ],
  [
    { text: "Q2 2024", options: { fill: "FFFFFF" } },
    { text: "$158K", options: { fill: "FFFFFF" } },
    { text: "+26%", options: { fill: "FFFFFF", color: "2E7D32" } },
    { text: "✓ Excellent", options: { fill: "FFFFFF", color: "2E7D32" } }
  ],
  [
    { text: "Q3 2024", options: { fill: "FFE5E5" } },
    { text: "$192K", options: { fill: "FFE5E5" } },
    { text: "+21%", options: { fill: "FFE5E5", color: "2E7D32" } },
    { text: "✓ Great", options: { fill: "FFE5E5", color: "2E7D32" } }
  ]
];

slide4.addTable(tableData, {
  x: 1.0,
  y: 1.5,
  w: 8.0,
  h: 2.0,
  fontSize: 14,
  border: { color: "FF6B6B", pt: 1 },
  align: "center",
  valign: "middle"
});

// Thêm chart
const chartData = [
  {
    name: "Revenue",
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [125, 158, 192, 215]
  }
];

slide4.addChart(pres.ChartType.bar, chartData, {
  x: 1.5,
  y: 3.8,
  w: 7.0,
  h: 2.0,
  barDir: "col",
  chartColors: ["4CAF50"],
  showTitle: true,
  title: "Revenue Growth (in $K)",
  titleColor: "F57C00",
  titleFontSize: 16,
  showLegend: true,
  showValue: true
});

// ============================================
// SLIDE 5: Thank You Slide
// ============================================
let slide5 = pres.addSlide();

// Gradient background đẹp
slide5.background = { fill: "6A1B9A" };

// Thêm các hình trang trí
slide5.addShape(pres.ShapeType.ellipse, {
  x: 0.2,
  y: 0.2,
  w: 2.0,
  h: 2.0,
  fill: { color: "9C27B0", transparency: 50 }
});

slide5.addShape(pres.ShapeType.ellipse, {
  x: 7.8,
  y: 3.5,
  w: 1.5,
  h: 1.5,
  fill: { color: "BA68C8", transparency: 50 }
});

// Thank you text
slide5.addText("Thank You!", {
  x: 1.0,
  y: 2.0,
  w: 8.0,
  h: 1.0,
  fontSize: 54,
  bold: true,
  color: "FFFFFF",
  align: "center",
  fontFace: "Arial"
});

// Contact info
slide5.addText("Questions?", {
  x: 1.0,
  y: 3.2,
  w: 8.0,
  h: 0.5,
  fontSize: 24,
  color: "E1BEE7",
  align: "center",
  italic: true
});

// Email
slide5.addText("📧 contact@example.com", {
  x: 1.0,
  y: 4.0,
  w: 8.0,
  h: 0.4,
  fontSize: 18,
  color: "FFFFFF",
  align: "center"
});

// Website
slide5.addText("🌐 www.example.com", {
  x: 1.0,
  y: 4.5,
  w: 8.0,
  h: 0.4,
  fontSize: 18,
  color: "FFFFFF",
  align: "center"
});

// ============================================
// Lưu file
// ============================================
pres.writeFile({ fileName: "Beautiful-Presentation.pptx" })
  .then(() => {
    console.log("✅ Presentation created successfully!");
    console.log("📁 File: Beautiful-Presentation.pptx");
  })
  .catch((err) => {
    console.error("❌ Error creating presentation:", err);
  });
