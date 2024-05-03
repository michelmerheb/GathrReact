import Header from "../components/Header";
import { useState, useEffect } from "react";
import EventsComponent from "../components/EventsComponent";
import FooterComponent from "../components/Footer";
import EventsModal from "../components/EventsModal";

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
}

const apiEventURL = import.meta.env.VITE_REACT_API_EVENTS_URL;

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiEventURL);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setIsLoading(false);
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-bl from-purple-900 via-purple-500 to-rose-900">
      <Header />
      <h1 className="flex text-center justify-center m-10 text-white font-bold text-3xl md:text-2xl sm:text-xl">
        GATHR Your Friends and Plan your Next Events
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="px-5 sm:px-10 md:px-20 lg:px-48 pb-5 ">
          {events.map((event) => (
            <EventsComponent
              key={event.id}
              {...event}
              onClick={() => openModal(event)}
            />
          ))}
        </div>
      )}
      <FooterComponent />
      {selectedEvent && (
        <EventsModal
          isOpen={!!selectedEvent}
          onClose={closeModal}
          {...selectedEvent}
        />
      )}
    </div>
  );
}
