
import "@/css/index.scss";
import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Next-App",
    description: "A next template apps",
    authors: [{ "name": "Johsua", url: "https://github.com/Johsua-123" }]
}

export default function Root({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}