import CulinaryCard from '@/components/ui/customs/culinary-card';

interface Culinary {
  id: number;
  image: string;
  title: string;
  description: string;
  price?: number;
}

const culinaries: Culinary[] = [
  {
    id: 1,
    image: '/assets/images/culinaries/tajin-sobih.jpg',
    title: 'Tajin Sobih',
    description:
      'Bubur manis tradisional khas Madura, yang unik karena menyajikan beragam bubur (putih, cokelat, mutiara) dan cenil kenyal, disiram santan gurih dan saus gula merah, dibungkus daun pisang, menawatkan perpadian rasa legit, gurih, dan tekstur beragam, mencerminkan kebersahajaan dan kekayaan budaya Madura.',
    price: 25000,
  },
  {
    id: 2,
    image: '/assets/images/culinaries/pattola-kowa.jpg',
    title: "Pattola Kowa'",
    description:
      'Aspirasi tradisional khas Surambi, Madura, yang terkomposisi semacam semacam layang layang bahan gula dan tanpa terigu. Pattola kowa memiliki tekstur lembut, menggugah selera dan aroma alami telur yang kuat, disajikan dengan cara dikukus maupun digoreng, keduanya enak dimakan dengan kopi atau teh panas setelah sarapan.',
    price: 30000,
  },
  {
    id: 3,
    image: '/assets/images/culinaries/kettan.jpg',
    title: 'Kettan',
    description:
      'Kettan Madura diberi dengan nanggin putih beton bahu saat dimasak sehingga berwarna seperti kunyit dengan tambahan gula cair putih buram. Makanan ini memiliki rasa yang lezat dengan kelezatan jenis puding yang bercita rasa gurih di lidah, serta tekstur lembut yang sangat memanjakan lidah dengan aroma harum yang khas.',
    price: 20000,
  },
  {
    id: 4,
    image: '/assets/images/culinaries/otak-otak.jpg',
    title: 'Otak-Otak',
    description:
      'Khususnya varian otak otak bandeng, menawarkan potensi renyah di luar dengan inti makanan yang lembut dan bercita rasa gurih. Makanan ini terbuat dari daging ikan atau telur yang dicampur dengan rempah, kelapa parut, dan bumbu tradisional, dikemas dalam daun pisang dan dipanggang hingga matang dengan sempurna.',
    price: 15000,
  },
  {
    id: 5,
    image: '/assets/images/culinaries/olet.jpg',
    title: 'Olet',
    description:
      'Kaliber tradisional tingkat kelas konsumtif Surambi Madura yang bisinya memiliki warna seperti kue cokelat. Makanan ini dibuat dengan bahan tepung ketan, santan, gula merah, dan telur ayam yang digoreng hingga berwarna kecokelatan dengan tekstur lembut yang sangat empuk dan renyah di bagian luarnya.',
    price: 18000,
  },
  {
    id: 6,
    image: '/assets/images/culinaries/getas.jpg',
    title: 'Getas',
    description:
      'Kue tradisional yang populer di Madura yang berbentuk potongan kecil berwarna kuning keemasan. Makanan ini dengan kandungan telur yang tinggi menghasilkan tekstur yang lembut sekaligus padat, memberikan kepuasan rasa manis tradisional dengan aroma telur yang kuat yang melekat pada setiap gigitan produk ini.',
    price: 22000,
  },
  {
    id: 7,
    image: '/assets/images/culinaries/kocor.jpg',
    title: 'Kocor',
    description:
      'Aworan gumpalan rasa kikiran yang berfungsi oat gula bening yang dominan dengan tekstur yang padat, kulit manis dengan jenis kue yang dibuat menggunakan bahan telur yang dominan dengan hiasan manik manik emas dan warna oranye sebagai pemanis rasa yang sedap dan lezat.',
    price: 20000,
  },
  {
    id: 8,
    image: '/assets/images/culinaries/ondeh-ondeh.jpg',
    title: 'Ondeh Ondeh',
    description:
      'Ondeh Ondeh adalah makanan tradisional yang tersebar keseluruh khasanah kuliner nusantara yang berisi dalam dengan cita rasa gurih manis dengan inti yang berisi gula merah cair. Tekstur luar tepung ketan dengan lapisan kelapa parut warna hijau yang renyah dan di bagian dalam yang lembut dengan manisnya gula merah asli yang gurih.',
    price: 15000,
  },
  {
    id: 9,
    image: '/assets/images/culinaries/lopes.jpg',
    title: 'Lopes',
    description:
      'Lopes merupakan makanan tradisional popular di perantauan timur Indonesia khususnya Sumenep yang memiliki tekstur keras dan kenyal. Makanan ini dibuat dari bahan dasar tepung tapioka yang dibentuk lempengan, ditambah santan kental dan penyedap khas Madura yang memberikan cita rasa gurih legit yang mengesankan dengan tekstur yang unik dan lezat.',
    price: 17000,
  },
  {
    id: 10,
    image: '/assets/images/culinaries/gheddeng-ghoreng.jpg',
    title: 'Gheddeng Ghoreng',
    description:
      'Tiwang pepaya ketala dicamput yang diolah dengan cara digoreng tradisional yang panjang dicampurkan sejumlah besar minyak kelapa dan rempah tradisional Madura. Makanan ini menciptakan tekstur yang kering dan kerenyahan maksimal di setiap gigitan, dengan cara pengo lahan yang memberikan rasa gurih yang menarik perhatian dan sedap dimulai dari aroma harum yang khas.',
    price: 19000,
  },
];

export default function CulinariesList() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-2">Kuliner Madura</h1>
          <p className="text-gray-600">Nikmati kelezatan autentik kuliner tradisional Madura</p>
        </div>

        <div className="space-y-16">
          {culinaries.map((culinary) => (
            <CulinaryCard
              key={culinary.id}
              image={culinary.image}
              title={culinary.title}
              description={culinary.description}
              price={culinary.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
