import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Testimonial() {
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    const q = query(
      collection(db, "users"),
      where("is_accept", "==", true),
      where("is_admin", "==", false)
    );
    const userDataArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userDataArray.push({ id: doc.id, data: doc.data() });
    });
    setUserData(userDataArray);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Check if there is any user data
  const hasUserData = userData.length > 0;

  return hasUserData ? (
    <div
      className="testimonial__div"
      id="testimonials"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos="zoom-in"
    >
      <h1 className="about__me">Let's see what others are saying</h1>
      <Marquee
        direction="left"
        speed={150}
        delay={-10}
        style={{ textAlign: "center" }}
        pauseOnHover={true}
      >
        {userData.map((item) => (
          <TestimonialCard key={item.id} data={item.data} />
        ))}
      </Marquee>
    </div>
  ) : null;
}

export default Testimonial;
