import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Case Studies | Your Name",
  description: "Detailed case studies and research analysis",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Amul Case Study</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium mb-2">Overview</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive analysis of Amul's business model, supply chain, and market strategy, with a focus on
                the iconic 'Amul Girl' advertising campaign created by Sylvester daCunha.
              </p>

              <h3 className="text-xl font-medium mb-2">Key Findings</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Cooperative business model analysis</li>
                <li>Supply chain optimization strategies</li>
                <li>Marketing and brand development through the 'Amul Girl' campaign</li>
                <li>Impact of topical and satirical advertising on brand recognition</li>
                <li>Longevity and evolution of the campaign over decades</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">The Amul Girl Campaign</h3>
              <p className="text-gray-600 mb-4">
                Sylvester daCunha, the creative genius behind the 'Amul Girl', revolutionized brand advertising in
                India. The campaign, which began in the 1960s, became known for its witty, topical, and sometimes
                controversial advertisements.
              </p>

              <div className="my-4">
                <Image
                  src="/images/amul-girl-1966.jpg"
                  alt="First Amul Girl advertisement from 1966"
                  width={400}
                  height={300}
                  className="rounded-lg"
                  priority
                />
                <p className="text-sm text-gray-500 mt-2">The first topical Amul advertisement from 1966</p>
              </div>

              <h4 className="text-lg font-medium mb-2">Notable Campaigns</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>1976: Commentary on forced sterilization during the Emergency</li>
                <li>1982: Response to controversial virginity tests in UK airports</li>
                <li>2012: Tribute to Sachin Tendulkar's retirement from ODI cricket</li>
                <li>2021: Celebration of Air India's return to the Tata Group</li>
              </ul>

              <p className="text-gray-600 mb-4">
                daCunha's work demonstrated a deep understanding of political nuances and social issues, cleverly
                infusing them into Amul's ad campaigns. His legacy continues to shape Amul's creative endeavors to this
                day.
              </p>

              <div className="mt-6">
                <a href="/amul-case-study.pdf" download="Amul_Case_Study.pdf">
                  <Button>
                    <FileDown className="mr-2 h-4 w-4" /> Download Full Case Study (PDF)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
