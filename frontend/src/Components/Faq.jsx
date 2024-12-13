import React from "react";

const Faq = () => {
  return (
    <>
      <div className=" faq_sec">
        <div className="faq_sec_title">
          <h1 className=" text-center mt-10 mb-1">
            Frequently Asked Questions
          </h1>
          <p className=" m-auto text-center mb-7 w-2/3">
            To help you navigate our site better and make your shopping
            experience easier, we have provided answers to some frequently asked
            questions below. Please call our customer service if your question
            remains unanswered.
          </p>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <p>In which cities are the services available?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">
              <p>hello</p>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <p>What is the procedure of booking an appointment at Indus?</p>
          </div>
          <div className="collapse-content  bg-slate-600 text-white">
            <p className=" mt-3">
              The procedure is very simple- you can book an appointment through
              our website for e-booking. Learn more about our doctors, have a
              look at their profiles, check availability and book your visit.
              Wait for the confirmation through a message before finally making
              a visit.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>Can I cancel / withdraw my booked Appointment?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">
              <p>hello</p>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>What payment options are available for Appointment?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">Payment can be made using:</p>
            <p>
              <ul>
                <li>Net Banking</li>
                <li>UPI</li>
                <li>Credit Card</li>
                <li>Debit Card</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>What if i am not satisfied with the care i receive?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">
              The quality of your care is our highest priority, and we’re
              dedicated to giving you the best experience possible. If we ever
              fail to meet your expectations, we’ll do our best to fix it.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>Who will have access to my information?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">
              All information contained in your patient file is confidential and
              may not be divulged to anyone beyond your treating team without
              your permission. If you or a family member have a question, please
              do not hesitate to speak to a member of your team. If you require
              copies of your medical information, please apply for this in
              writing to your psychiatrist or the nursing unit manager, as there
              are legal documentation requirements involved.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>
              What is unacceptable behaviour once admitted and What are the
              Consequences?
            </p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p>
              <ul className=" mt-3">
                <li>Relationships between patients</li>
                <li>Damage to property</li>
                <li>Smoking</li>
                <li>Abusive behaviour</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>What does the recruitment process for applying Jobs?</p>
          </div>
          <div className="collapse-content bg-slate-600 text-white">
            <p className=" mt-3">
              Our recruitment process typically follows these steps: Complete
              the online application form and forward it, together with your CV,
              to the email address provided on the relevant advert. Your
              application will be reviewed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
