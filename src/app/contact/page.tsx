import type { Metadata } from "next";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a project in mind? Get in touch with CodeCrew. We'd love to hear about your ideas and help bring them to life.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 md:pt-32" />
      <Contact />
    </>
  );
}
