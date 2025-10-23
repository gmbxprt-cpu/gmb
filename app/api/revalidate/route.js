// app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { slug } = await request.json();
    const secret = request.nextUrl.searchParams.get("secret");

    // ✅ Secure with secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // ✅ Revalidate specific paths
    const path = slug ? `/${slug}` : "/blogs";

    revalidatePath(path);
    revalidatePath("/sitemap.xml"); // Refresh sitemap cache too
    revalidatePath("/"); // Optional: refresh homepage

    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
