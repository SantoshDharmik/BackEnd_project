const colleges = [
    {
name: "Visvesvaraya National Institute of Technology (VNIT)",
courses: ["Computer Science, Mechanical, Electrical, Civil, Electronics, Chemical, Metallurgy"],
duration: "2",
fees_per_year: "1.6 Lakh",
address: "South Ambazari Road, Nagpur, Maharashtra 440010",
status: "Government",
NIRF_ranking: "51"
},
{
name: "Yeshwantrao Chavan College of Engineering (YCCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics, AI/ML"],
duration: "1",
fees_per_year: "1.45 Lakh",
address: "Hingna Road, Wanadongri, Nagpur, Maharashtra 441110",
status: "Autonomous",
NIRF_ranking: "151"
},
{
name: "Shri Ramdeobaba College of Engineering and Management (RCOEM)",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics, Chemical, AI/ML"],
duration: "3",
fees_per_year: "1.55 Lakh",
address: "Katol Road, Nagpur, Maharashtra 440013",
status: "Autonomous",
NIRF_ranking: "98"
},
{
name: "G. H. Raisoni College of Engineering (GHRCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics, Data Science"],
duration: "4",
fees_per_year: "1.35 Lakh",
address: "CRPF Gate No. 3, Hingna Road, Digdoh Hills, Nagpur, Maharashtra 440016",
status: "Autonomous",
NIRF_ranking: "201"
},
{
name: "Laxminarayan Institute of Technology (LIT)",
courses: ["Chemical Technology, Oil Technology, Food Technology"],
duration: "4",
fees_per_year: "0.85 Lakh",
address: "Amravati Road, Nagpur, Maharashtra 440033",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Priyadarshini College of Engineering (PCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.25 Lakh",
address: "Hingna Road, Nagpur, Maharashtra 441110",
status: "Autonomous",
NIRF_ranking: ""
},
{
name: "K.D.K. College of Engineering (KDKCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "0.95 Lakh",
address: "Nandanvan, Nagpur, Maharashtra 440009",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Nagpur Institute of Technology (NIT)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.1 Lakh",
address: "Sitabuldi, Nagpur, Maharashtra 440012",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "St. Vincent Pallotti College of Engineering & Technology",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.05 Lakh",
address: "Gandhinagar, Nagpur, Maharashtra 440023",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Anjuman College of Engineering & Technology (ACET)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "0.88 Lakh",
address: "Sadar, Nagpur, Maharashtra 440001",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Smt. Radhikatai Pandav College of Engineering (SRPCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "0.92 Lakh",
address: "Nagpur, Maharashtra 441108",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Rajiv Gandhi College of Engineering and Research (RGCER)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.15 Lakh",
address: "Wanadongri, Hingna Road, Nagpur, Maharashtra 441110",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Tulsiramji Gaikwad-Patil College of Engineering and Technology (TGPCE)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "0.98 Lakh",
address: "Mohgaon, Kalmeshwar Road, Nagpur, Maharashtra 441501",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "G. H. Raisoni Institute of Engineering and Technology (GHRIET)",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.02 Lakh",
address: "Digdoh Hills, Hingna Road, Nagpur, Maharashtra 440016",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "S. B. Jain Institute of Technology, Management & Research",
courses: ["Computer Science, IT, Mechanical, Civil, Electrical, Electronics"],
duration: "4",
fees_per_year: "1.08 Lakh",
address: "Sujata Complex, Katol Road, Nagpur, Maharashtra 440013",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "G. H. Raisoni Institute of Engineering and Technology for Women",
courses: ["Computer Science, Information Technology, Electronics & Telecommunication, Artificial Intelligence & Data Science"],
duration: "4",
fees_per_year: "1.12 Lakh",
address: "Digdoh Hills, Hingna Road, Nagpur, Maharashtra 440016",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Rajiv Gandhi Institute of Technology (RGIT)",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.96 Lakh",
address: "Byramji Town, Nagpur, Maharashtra 440013",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shree Hanumat Institute of Technology & Management",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.89 Lakh",
address: "Katol Road, Nagpur, Maharashtra 441302",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "V.M. Institute of Engineering & Technology (VMIET)",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.94 Lakh",
address: "Wathoda Layout, Nagpur, Maharashtra 440023",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Vishwabharti Academy College of Engineering",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.87 Lakh",
address: "Amravati Road, Nagpur, Maharashtra 440037",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shri Sai College of Engineering & Technology",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.82 Lakh",
address: "Bhadrawati, Chandrapur District, Nagpur Region, Maharashtra 442902",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Bapurao Deshmukh College of Engineering (BDCE)",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.85 Lakh",
address: "Sevagram, Wardha, Nagpur Region, Maharashtra 442102",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Jagadambha College of Engineering & Technology (JCET)",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.83 Lakh",
address: "Yavatmal, Nagpur Region, Maharashtra 445001",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Jawaharlal Darda Institute of Engineering & Technology (JDIET)",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.86 Lakh",
address: "Yavatmal, Nagpur Region, Maharashtra 445001",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Nuva College of Engineering & Technology",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.81 Lakh",
address: "Katol, Nagpur District, Maharashtra 441302",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "P. R. Pote (Patil) College of Engineering and Management",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.84 Lakh",
address: "Amravati, Nagpur Region, Maharashtra 444701",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "P. R. M. Institute of Technology and Research",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.85 Lakh",
address: "Badnera-Amravati, Nagpur Region, Maharashtra 444701",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Institute of Management & Technology (IMT)",
courses: ["Computer Science, Information Technology, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "1.18 Lakh",
address: "Near Airport, Nagpur, Maharashtra 440001",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Institute of Science and Technology (IST)",
courses: ["Computer Science, Information Technology, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "1.09 Lakh",
address: "Jhalwa, Nagpur, Maharashtra 440023",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shri Shankarprasad Agrawal College of Engineering & Technology",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.91 Lakh",
address: "Borkhedi, Wardha Road, Nagpur, Maharashtra 441108",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shri Vile Parle Kelavani Mandal's Institute of Technology",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical"],
duration: "4",
fees_per_year: "1.22 Lakh",
address: "Dhantoli, Nagpur, Maharashtra 440012",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shri Datta Meghe College of Engineering",
courses: ["Computer Science, Mechanical, Civil, Electrical, Electronics & Telecommunication"],
duration: "4",
fees_per_year: "0.99 Lakh",
address: "Airoli, Nagpur, Maharashtra 440008",
status: "RTMNU",
NIRF_ranking: ""
},
{
name: "Shri Guru Gobind Singhji College of Engineering & Technology",
courses: ["Computer Science, Information Technology, Mechanical, Civil, Electrical"],
duration: "4",
fees_per_year: "0.93 Lakh",
address: "Nanded, Nagpur Region, Maharashtra 431605",
status: "RTMNU",
NIRF_ranking: ""
}
];

export { colleges }
