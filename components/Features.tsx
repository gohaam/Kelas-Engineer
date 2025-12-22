
import React from 'react';
import { BookOpen, Award, Clock, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="text-yellow-primary" size={32} />,
      title: "Kurikulum Industri",
      desc: "Materi disusun berdasarkan standar kebutuhan industri terkini oleh para praktisi ahli."
    },
    {
      icon: <Award className="text-yellow-primary" size={32} />,
      title: "Sertifikat Kompetensi",
      desc: "Dapatkan sertifikat penyelesaian yang diakui untuk meningkatkan portofolio profesional Anda."
    },
    {
      icon: <Clock className="text-yellow-primary" size={32} />,
      title: "Akses Selamanya",
      desc: "Sekali beli, Anda dapat mengakses materi video dan modul kapan saja tanpa batas waktu."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
