import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import doctor_icon from "../assets/doctor_icon.png";
import patient from "../assets/personal.png";
import bill from "../assets/bill.png";
import bed from "../assets/bed.png";
import syringe from "../assets/syringe.png";
import ambulancedriver from "../assets/ambulancedriver.png";
import amresh from "../assets/amresh.png";
import appointment from "../assets/calendar.png";
import feedback from "../assets/feedback.png";
import hospital from "../assets/hospital_icon.png";
import trophy from "../assets/trophy.png";
import support from "../assets/support.png";
import customer from "../assets/customer-satisfaction.png";
import emergency from "../assets/emergency-room.png";
import doctor from "../assets/appointment.png";
import about_image from "../assets/about_icon.png";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import Faq from "../Components/Faq";
import time from "../assets/timing.png";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <div className="about_sec_container container mt-24 flex justify-between">
        <div className="about_sec w-1/2">
          <img className=" h-96 m-auto" src={about_image} alt="" />
        </div>
        <div className="about_sec w-1/2">
          <p className="title_border">About Us</p>
          <h1>The Great Place Of Hospital Center</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            aut recusandae, dignissimos atque aspernatur neque ipsum temporibus
            a numquam sequi molestiae, illo rem sit natus officia. Officiis,
            fugiat velit ipsa et perspiciatis odit! Nostrum amet et at.
            Excepturi esse, eveniet, minima facere totam architecto dolores
            quasi iste ea sit optio?
          </p>
          <div className=" mt-6">
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>Ambulance Sevices</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>Affordable Pricing</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>On Duty Doctors</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>24/7 Emergency Services</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>Medical Shop on Clinic</p>
            </div>
          </div>
        </div>
      </div>

      {/* mission and vision */}
      <div className=" container">
        <h1 className=" text-center font-bold mb-5 mt-10">Mission & Vision</h1>
        <div className=" mission">
          <img src={mission} alt="" />
          <div className=" mission_describe">
            <h1 className=" font-bold">Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              doloribus sunt ipsa, distinctio voluptatibus quod ipsum soluta
              expedita natus explicabo rem maxime amet obcaecati, cumque ratione
              eligendi suscipit tempore enim dignissimos reprehenderit fugiat
              aspernatur temporibus? Blanditiis, atque odio? Recusandae impedit
              veritatis repellat nihil expedita eveniet soluta amet tenetur,
              fuga sed!
            </p>
          </div>
        </div>
        <div className=" vision">
          <div className=" vision_describe">
            <h1 className=" font-bold">Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              doloribus sunt ipsa, distinctio voluptatibus quod ipsum soluta
              expedita natus explicabo rem maxime amet obcaecati, cumque ratione
              eligendi suscipit tempore enim dignissimos reprehenderit fugiat
              aspernatur temporibus? Blanditiis, atque odio? Recusandae impedit
              veritatis repellat nihil expedita eveniet soluta amet tenetur,
              fuga sed!
            </p>
          </div>
          <img src={vision} alt="" />
        </div>
      </div>

      {/* features */}
      <div className=" container my-24">
        <h1 className="textbottom text-center sm:mb-3 lg:mb-8">
          Solutions We Offer
        </h1>
        <div className="features">
          <div className="features_card text-center">
            <img className=" w-20 m-auto" src={doctor_icon} alt="" />
            <h1>Doctors</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className=" w-16 m-auto" src={patient} alt="" />
            <h1>Patient Information</h1>
            <p>
              An electronic medical record system to store basic and medical
              details of all patients.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-16 m-auto" src={bill} alt="" />
            <h1>Billing System</h1>
            <p>
              Seamlessly Manage the billing for all you patients through the
              platform.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={bed} alt="" />
            <h1>Beds Information</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={syringe} alt="" />
            <h1>Medicines</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={time} alt="" />
            <h1>Timely Care</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={ambulancedriver} alt="" />
            <h1>Ambulance Information</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={appointment} alt="" />
            <h1>Appointment Management</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
          <div className=" features_card text-center">
            <img className="w-20 m-auto" src={feedback} alt="" />
            <h1>Feedback & Communication</h1>
            <p>
              Manage details of all doctors with their schedules and
              appointments.
            </p>
          </div>
        </div>
      </div>

      {/* analytics */}
      <div className=" text-center">
        <h1 className=" text-3xl">Empowering Healthcare</h1>
      </div>
      <div className="container analytics  py-8">
        <div className=" analytics_card">
          <img className=" w-28" src={hospital} alt="" />
          <h1 className="font-bold">150+</h1>
          <p className=" font-bold">Trusted Hospitals</p>
        </div>
        <div className=" analytics_card">
          <img className=" w-28" src={trophy} alt="" />
          <h1 className="font-bold">08</h1>
          <p className="font-bold">Award Achieved</p>
        </div>
        <div className=" analytics_card">
          <img className=" w-28" src={support} alt="" />
          <h1 className=" font-bold">150+</h1>
          <p className=" font-bold">Trusted Hospitals</p>
        </div>
        <div className=" analytics_card">
          <img className=" w-28" src={customer} alt="" />
          <h1 className="font-bold">10,072+</h1>
          <p className="font-bold">Total Visitors</p>
        </div>
      </div>

      {/* emergency helpline */}
      <div className="emergency">
        <div className=" container flex justify-between">
          <div className="m-auto ">
            <p className="title_border">Emergency Helpline</p>
            <h1 className=" text-3xl font-bold my-4">Need Emergency Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              soluta rem eligendi libero saepe repudiandae delectus cupiditate
              quasi ullam, nam assumenda architecto nisi veritatis vel minima
              dignissimos eaque mollitia. Tenetur libero dolorem consequuntur
              aspernatur molestiae optio, delectus harum facere officiis
              similique perferendis id quod doloremque, amet sit minus. Rem,
              reiciendis?
            </p>
            <div className="emergency_helpline_sec flex justify-evenly mt-8">
              <div className="emergency_card flex ">
                <div className="emergency_icon m-auto">
                  <IoIosCall size={28} />
                </div>
                <div>
                  <p>Phone Number</p>
                  <p>6235003768</p>
                </div>
              </div>
              <div className="emergency_card flex">
                <div className="emergency_icon m-auto">
                  <MdMarkEmailUnread size={28} />
                </div>
                <div>
                  <p>Quick Email</p>
                  <p>careplus@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2 m-auto">
            <img className=" m-auto" src={emergency} alt="" />
          </div>
        </div>
      </div>

      {/* how we work */}
      <div className="working_process container">
        <h1 className=" text-center text-3xl">Our Working Process</h1>
        <ul className="working_process timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className=" font-bold text-lg">Step: 1</time>
              <div className="text-lg font-black">Find Hospitals</div>
              <p>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-bold text-lg">Step: 2</time>
              <div className="text-lg font-black">Fill the Form</div>
              <p>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple's
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-bold text-lg">Step: 3</time>
              <div className="text-lg font-black">Book an Appointment</div>
              <p>
                The iPod is a discontinued series of portable media players and
                multi-purpose mobile devices designed and marketed by Apple Inc.
                The first version was released on October 23, 2001, about 8+1⁄2
                months after the Macintosh version of iTunes was released. Apple
                sold an estimated 450 million iPod products as of 2022.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-bold text-lg">Step: 4</time>
              <div className="text-lg font-black">Check-Up</div>
              <p>
                iPhone is a line of smartphones produced by Apple Inc. that use
                Apple's own iOS mobile operating system. The first-generation
                iPhone was announced by then-Apple CEO Steve Jobs on January 9,
                2007.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-bold text-lg">Step: 5</time>
              <div className="text-lg font-black">Get Reports</div>
              <p>
                The Apple Watch is a line of smartwatches produced by Apple Inc.
                It incorporates fitness tracking, health-oriented capabilities,
                and wireless telecommunication, and integrates with iOS and
                other Apple products and services
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* appointment */}
      <div className="appointment_sec flex justify-between">
        <div className="appointment_sec_img w-1/3 ">
          <img className=" m-auto" src={doctor} alt="" />
        </div>
        <div className="appointment_sec_text w-2/3 m-auto">
          <h1 className=" font-bold my-4">
            Not all health issues can be cured by an Apple
          </h1>
          <p>
            Schedule an appointment with one of our experienced medical
            professional today!
          </p>
          <Link to="/hospitals" className="btn my-4 font-bold">
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* faq */}
      <div className=" container">
        <Faq />
      </div>

      {/* our team */}
      <div className="container">
        <h1 className=" mt-14 text-center mb-1">MEET OUR BEST LEADERSHIP</h1>
        <p className=" text-center mb-5">
          On a mission to build a digitalized healthcare ecosystem
        </p>
        <div className="team_card_sec">
          <div className="team_card">
            <img src={amresh} alt="" />
            <h4 className=" text-center">Amresh Kumar</h4>
            <p className=" text-center">Chief Executicive Officer</p>
            <p></p>
            <div className="team_card_icon flex flex-row justify-center gap-2">
              <i class="fa-brands fa-square-instagram fa-xl"></i>
              <i class="fa-brands fa-square-x-twitter fa-xl"></i>
              <i class="fa-brands fa-linkedin fa-xl"></i>
              <i class="fa-brands fa-square-facebook fa-xl"></i>
            </div>
          </div>
          <div className="team_card">
            <img src={amresh} alt="" />
            <h4 className=" text-center">Amresh Kumar</h4>
            <p className=" text-center">Business Analyst</p>
            <p></p>
            <div className="team_card_icon flex flex-row justify-center gap-2">
              <i class="fa-brands fa-square-instagram fa-xl"></i>
              <i class="fa-brands fa-square-x-twitter fa-xl"></i>
              <i class="fa-brands fa-linkedin fa-xl"></i>
              <i class="fa-brands fa-square-facebook fa-xl"></i>
            </div>
          </div>
          <div className="team_card">
            <img src={amresh} alt="" />
            <h4 className=" text-center">Amresh Kumar</h4>
            <p className=" text-center">Chief Creative Officer</p>
            <p></p>
            <div className="team_card_icon flex flex-row justify-center gap-2">
              <i class="fa-brands fa-square-instagram fa-xl"></i>
              <i class="fa-brands fa-square-x-twitter fa-xl"></i>
              <i class="fa-brands fa-linkedin fa-xl"></i>
              <i class="fa-brands fa-square-facebook fa-xl"></i>
            </div>
          </div>
          <div className="team_card">
            <img src={amresh} alt="" />
            <h4 className=" text-center">Amresh Kumar</h4>
            <p className=" text-center">Chief Marketing Officer</p>
            <p></p>
            <div className="team_card_icon flex flex-row justify-center gap-2">
              <i class="fa-brands fa-square-instagram fa-xl"></i>
              <i class="fa-brands fa-square-x-twitter fa-xl"></i>
              <i class="fa-brands fa-linkedin fa-xl"></i>
              <i class="fa-brands fa-square-facebook fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
