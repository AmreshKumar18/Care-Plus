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
            At our hospital center, we are committed to providing exceptional
            healthcare services in a compassionate and patient-focused
            environment. Our state-of-the-art facilities, combined with a
            dedicated team of skilled medical professionals, ensure that every
            patient receives personalized care tailored to their unique needs.
            We strive to create a welcoming and supportive atmosphere, where
            health, healing, and innovation come together to deliver the best
            possible outcomes. Your well-being is our mission, and we are here
            to serve you with excellence and integrity.
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
      <div className=" container ">
        <div className="header_txt">
          <h1 className="text-center font-bold mb-5 mt-10">Mission & Vision</h1>
        </div>
        <div className=" mission">
          <img src={mission} alt="" />
          <div className=" mission_describe">
            <h1 className=" font-bold">Mission</h1>
            <p>
              Our mission is to revolutionize healthcare by delivering
              high-quality, patient-centered services with compassion,
              innovation, and excellence. We aim to provide accessible and
              affordable care to everyone, empowering individuals and families
              to lead healthier, happier lives. By fostering a culture of trust,
              respect, and continuous improvement, we strive to set new
              standards in medical care and make a meaningful difference in the
              communities we serve.
            </p>
          </div>
        </div>
        <div className=" vision">
          <div className=" vision_describe">
            <h1 className=" font-bold">Vision</h1>
            <p>
              Our vision is to be a global leader in healthcare, setting the
              benchmark for excellence in patient care, innovation, and medical
              research. We aspire to create a world where everyone has access to
              advanced and compassionate healthcare, enabling individuals to
              achieve their highest potential for health and well-being. By
              embracing cutting-edge technology and fostering a culture of
              empathy, integrity, and collaboration, we aim to transform lives
              and shape the future of medicine.
            </p>
          </div>
          <img src={vision} alt="" />
        </div>
      </div>

      {/* features */}
      <div className=" container my-24">
        <div className="heading_txt">
          <h1 className="textbottom text-center sm:mb-3 lg:mb-8">
            Solutions We Offer
          </h1>
        </div>
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
        <div className="header_txt">
          <h1 className=" text-3xl">Empowering Healthcare</h1>
        </div>
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
              In critical times, every second counts. Our 24/7 emergency
              helpline ensures immediate assistance and expert care for all your
              urgent medical needs. Whether it’s a sudden illness, accident, or
              any life-threatening situation, our dedicated team is always ready
              to support you. Trust us to provide prompt and reliable help when
              you need it the most—because your safety and well-being are our
              top priorities.
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
        <div className="header_txt">
          <h1 className=" text-center text-3xl">Our Working Process</h1>
        </div>
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
                Search for trusted hospitals near you using our platform. We
                offer a comprehensive list of top-rated healthcare facilities,
                ensuring you find the right one for your needs quickly and
                efficiently.
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
                Complete a simple and user-friendly form to provide us with your
                details and medical requirements. This step ensures a smooth and
                personalized healthcare experience tailored to your needs.
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
                Choose a convenient time and date for your visit. Our
                hassle-free booking system allows you to secure your appointment
                with just a few clicks.
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
                Visit the hospital for your scheduled consultation or treatment.
                Our platform ensures you receive quality care with minimal
                waiting times.
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
                Access your medical reports digitally through our secure
                platform. Review and manage your health records anytime,
                anywhere, for a seamless healthcare experience.
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
