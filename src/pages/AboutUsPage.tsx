import { useEffect } from "react";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";

export default function AboutUsPage() {
  useEffect(() => {
    document.title = "Gathr- About Us";
  });
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-bl from-purple-900 via-purple-500 to-rose-900">
      <Header />
      <div className="max-w-4xl mx-auto p-4 text-white">
        <h1 className="text-4xl font-bold text-center mb-6">About Gathr</h1>
        <p className="text-lg mb-4">
          Welcome to <strong>Gathr</strong>, where your journey to discovering
          the vibrant pulse of Lebanon and the world begins. Founded with the
          vision of bringing people together, Gathr is more than just an event
          planner—it’s a gateway to experiences that connect and inspire.
        </p>

        <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
        <p className="mb-4">
          At Gathr, our mission is simple: to enrich lives by making it easier
          for everyone to find and participate in events that matter to them,
          whether locally in Lebanon or on a global scale. From the bustling
          streets of Beirut to the scenic trails of the Lebanese mountains, our
          platform ensures you’re always just a click away from experiencing the
          best our country has to offer.
        </p>

        <h2 className="text-3xl font-bold mb-3">What We Do</h2>
        <p className="mb-4">
          <strong>Local Events:</strong> Gathr is your premier guide to
          discovering Lebanon’s rich tapestry of cultural festivals, live music
          performances, art exhibitions, and more. Our platform allows locals
          and tourists alike to easily navigate the vibrant local scene,
          ensuring you never miss out on what’s happening around you.
        </p>
        <p className="mb-4">
          <strong>Global News:</strong> Beyond local events, Gathr provides
          up-to-the-minute news coverage from around the globe. Stay informed
          with our curated news page that covers everything from international
          politics to worldwide entertainment and lifestyle trends.
        </p>

        <h2 className="text-3xl font-bold mb-3">Why Choose Gathr?</h2>
        <ul className="list-disc ml-5 mb-4">
          <li>
            <strong>User-Friendly Interface:</strong> Our website is designed
            with user experience at its core, ensuring you can easily search,
            find, and register for events or catch up on global news without
            hassle.
          </li>
          <li>
            <strong>Community-Focused:</strong> Gathr believes in the power of
            community. We’re dedicated to fostering a sense of connection
            through shared experiences. Our platform not only lists events but
            also encourages community interactions through reviews, ratings, and
            personal accounts of events.
          </li>
          <li>
            <strong>Expert Insights:</strong> With a team of seasoned event
            planners and knowledgeable contributors, Gathr offers expert
            recommendations and insights into Lebanon’s cultural scene and
            global occurrences.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-3">Join Us</h2>
        <p>
          Whether you’re a local resident, a tourist in Lebanon, or a global
          citizen curious about world events, Gathr invites you to explore,
          engage, and be enlightened. Join our community today to start your
          journey with Gathr, where events and news come together to create
          meaningful experiences.
        </p>
        <p className="mt-4">
          <strong>Connect with Us:</strong> Follow us on social media, subscribe
          to our newsletter, and stay engaged with the pulse of the planet right
          here at Gathr.
        </p>
      </div>
      <FooterComponent />
    </div>
  );
}
