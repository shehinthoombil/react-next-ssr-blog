
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" className="bg-blue-700 p-2 rounded-full text-white">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="bg-blue-400 p-2 rounded-full text-white">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" className="bg-red-600 p-2 rounded-full text-white">
            <FaYoutube />
          </a>
          <a href="https://pinterest.com" className="bg-red-500 p-2 rounded-full text-white">
            <FaPinterest />
          </a>
          <a href="https://linkedin.com" className="bg-blue-700 p-2 rounded-full text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://whatsapp.com" className="bg-green-500 p-2 rounded-full text-white">
            <FaWhatsapp />
          </a>
        </div>

        {/* About Section */}
        <div className="mb-4">
          <p className="text-gray-600">
            Finline is an automated platform for financial documents. Your risk-free online tool to create a project report to apply for a bank loan. Be it a new business portfolio or an existing CMA for SME, we have solutions for entrepreneurs & enterprises at every stage.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <h4 className="font-bold text-gray-800">CONTACT US TODAY</h4>
          <p className="text-gray-600">Corporate Location<br />
            FYNAMICS Business Solutions(P) Ltd.<br />
            E-6, KSUM, Ground Floor,<br />
            Thejaswini, Technopark, Trivandrum.
          </p>
          <p className="text-gray-600">Phone: (+91) 884-837-7012</p>
          <p className="text-gray-600">Email: info@finline.in</p>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">
          Copyright 2023 - 2024 Finline | <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms of Use</a> | <a href="/support" className="hover:underline">Support</a>
        </p>
      </div>
    </footer>
  );
}
