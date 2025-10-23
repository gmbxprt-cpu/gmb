// app/api/revalidate/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // ✅ Secret validation (to protect endpoint)
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // ✅ Trigger revalidation
    const path = body?.slug ? `/${body.slug}` : "/blogs";

    await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=${path}`, { method: "GET" }),
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/sitemap.xml`, { method: "GET" }),
    ]);

    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
