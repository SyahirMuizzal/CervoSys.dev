"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <>
      {/* ✅ Tampilkan hanya di luar /admin */}
      {!isAdminPage && <Navbar />}

      <main className="flex-1">{children}</main>

      {!isAdminPage && <Footer />}
    </>
  );
}
