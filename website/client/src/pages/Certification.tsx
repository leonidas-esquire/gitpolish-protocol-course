import { useEffect, useState, useRef } from "react";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
// Assume you have a tRPC hook generator; adjust import to match your setup
import { trpc } from "../utils/trpc";

interface CertificateData {
  id: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
}

export default function Certificate() {
  const { user } = useAuth();
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  // Replace with your actual tRPC query for fetching certificate by userId
  const getCert = trpc.getCertificate.useQuery(
    { studentId: user?.id || "" },
    { enabled: !!user }
  );

  useEffect(() => {
    if (getCert.data) {
      setCertificate(getCert.data as CertificateData);
    }
  }, [getCert.data]);

  async function handleDownload() {
    // Placeholder: integrate a library like html2pdf or react-pdf to generate PDF
    // Example using html2canvas and jsPDF (not installed yet):
    // const canvas = await html2canvas(certificateRef.current!);
    // const imgData = canvas.toDataURL('image/png');
    // const pdf = new jsPDF();
    // pdf.addImage(imgData, 'PNG', 0, 0);
    // pdf.save(`certificate-${certificate?.id}.pdf`);
    alert("PDF generation is not yet implemented.");
  }

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Certificate</h1>
        {certificate ? (
          <>
            <div
              ref={certificateRef}
              className="border-2 border-gray-300 p-8 rounded-lg bg-white shadow-md max-w-xl mx-auto"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {certificate.courseTitle}
              </h2>
              <p className="mb-2">Awarded to:</p>
              <p className="text-xl font-bold mb-4">
                {certificate.studentName}
              </p>
              <p className="mb-2">
                Completion Date: {certificate.completionDate}
              </p>
              <p className="mb-2">Certificate ID: {certificate.id}</p>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Download as PDF
              </button>
            </div>
          </>
        ) : (
          <p>Loading your certificate…</p>
        )}
      </main>
    </>
  );
}
