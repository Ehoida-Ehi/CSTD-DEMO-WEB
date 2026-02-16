// home gallery images
import newStory2 from "../assets/images/karri.jpg";
import newStory3 from "../assets/images/meet.jpg";
import newStory1 from "../assets/images/cstd group.jpg";
import newStory4 from "../assets/images/chukaa.jpg";
import newStory5 from "../assets/images/slidepix.jpg";
import newStory7 from "../assets/images/New-Story-3.jpg";

// department images
import satelliteImg from '../assets/images/satDev/naija sat.jpg';
import researchImg from '../assets/images/satDev/presentationsession.jpg';
import spacemissionsImg from '../assets/images/satDev/SatDish.png';
import financeImg from '../assets/images/satDev/wemeninspace.jpg';
import ictImg from '../assets/images/satDev/cstdSectionExpo.jpg';
import spacecraftImg from '../assets/images/satDev/LadyScientist.jpg';
import droneImg from '../assets/images/satDev/InRussianFaring.jpg';
import adminImg from '../assets/images/satDev/woman-tracking-vessels-coast-line-territory.jpg';
import groundsegmentImg from '../assets/images/satDev/lab_test.jpg';
import directorateImg from '../assets/images/satDev/directorate.jpg';

// about hero images
import pic1 from '../assets/images/satDev/still-life-space-with-white-astronaut.jpg';
import pic2 from '../assets/images/satDev/still-life-space-with-white-astronaut.jpg';
import pic3 from '../assets/images/satDev/LadyScientist.jpg';

// research and innovation images
import pic5 from "../assets/images/rniPic5.png"
import pic6 from "../assets/images/rniPic6.jpg"
import pic7 from "../assets/images/rniPic7.png"
import pic8 from "../assets/images/rniPic8.png"
import pic9 from "../assets/images/rniPic9.jpg"
import pic11 from "../assets/images/rniPic11.jpg"
import pic12 from "../assets/images/rniPic12.jpg"
import pic13 from "../assets/images/rniPic13.png"
import pic14 from "../assets/images/rniPic14.png"
import pic15 from "../assets/images/rniPic15.png"
import pic16 from "../assets/images/rniPic16.png"
import pic17 from "../assets/images/rniPic17.png"

//media images
import image1 from '../assets/images/New-Story-1.jpg'
import image2 from '../assets/images/New-Story-2.jpg'
import newStory8 from '../assets/images/new-story-5.jpg'
import newStory6 from '../assets/images/New-story-6.jpg'

// contact images
import NasrdaGate from '../assets/images/NasrdaGate.webp'
import StartUp from '../assets/images/StartUP.jpg'



 const homeImages = [
    newStory2,
    newStory3,
    newStory1,
    newStory4,
    newStory5,
    newStory6,
    newStory7,
    newStory8,
  ];

  const departmentsDetails = [
    { title: "Satellite Systems", image: satelliteImg },
    { title: "Research, Development and Innovation", image: researchImg },
    { title: "Satellite Missions & Data Communication", image: spacemissionsImg },
    { title: "Finance and Account", image: financeImg },
    { title: "ICT", image: ictImg },
    { title: "Spacecraft Structure & Mechanisms", image: spacecraftImg },
    { title: "Spacecraft Aerodynamics and Control", image: droneImg },
    { title: "Administration", image: adminImg },
    { title: "Ground Segment", image: groundsegmentImg },
    { title: "Directorate", image: directorateImg },
  ];

// const aboutHeroimages = [pic1, pic2, pic3];
const aboutHeroimages = [pic1];

const rniImages = [
   pic5,
   pic6,
   pic7,
   pic8, 
   pic9, 
   pic11, 
   pic12, 
   pic13, 
   pic14, 
   pic15, 
   pic16, 
   pic17, 
]


const mediaImages = [
   { url: image1,
    title: 'CSTD Visit to innovation Hub'
   },
    {url: image2,
    title:  'CSTD Visit to innovation Hub'
    },
   { url: newStory8,
    title:  'CSTD Visit to innovation Hub'
   },
   { url: newStory6,
    title:  'CSTD Visit to innovation Hub'
   },
    {  url: newStory7,
      title: 'CSTD Visit to innovation Hub'
   },
   {  url: newStory2,
      title: 'CSTD Software development program; Graduate recieving Certificate of completion'
   },
   {  url: newStory3,
      title: 'CSTD Software development program; Graduate ceremony'
   },
   {  url: newStory1,
      title: 'CSTD Software development program; Group Photo Session'
   },
   {  url: newStory4,
      title: 'KARI Participants recieving certificate of completion'
   },
   {  url: newStory5,
      title: '...'
   },
  

]

const contactImages = [
  NasrdaGate,
  StartUp,
];
export {mediaImages, homeImages, departmentsDetails, aboutHeroimages, contactImages, rniImages}