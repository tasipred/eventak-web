import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, whatsapp, city, categories, description } = body;

    // Validate required fields
    if (!businessName || !whatsapp || !city || !categories) {
      return NextResponse.json(
        { error: "جميع الحقول المطلوبة يجب ملؤها" },
        { status: 400 }
      );
    }

    // Format whatsapp number (add 966 if needed)
    let formattedWhatsapp = whatsapp.replace(/\D/g, ""); // Remove non-digits
    if (formattedWhatsapp.startsWith("0")) {
      formattedWhatsapp = "966" + formattedWhatsapp.substring(1);
    } else if (!formattedWhatsapp.startsWith("966")) {
      formattedWhatsapp = "966" + formattedWhatsapp;
    }

    // Create vendor in database
    const vendor = await db.vendor.create({
      data: {
        businessName,
        whatsapp: formattedWhatsapp,
        city,
        categories,
        description: description || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم التسجيل بنجاح",
        vendorId: vendor.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Vendor signup error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const vendors = await db.vendor.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ vendors });
  } catch (error) {
    console.error("Get vendors error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب البيانات" },
      { status: 500 }
    );
  }
}
