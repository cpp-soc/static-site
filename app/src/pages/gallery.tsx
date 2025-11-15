import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { galleryEvents, GalleryEvent } from "@/data/galleryData";
import GalleryModal from "@/components/GalleryModal";

interface EventGalleryProps {
  event: GalleryEvent;
}

const EventGallery: React.FC<EventGalleryProps> = ({ event }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStartIndex, setModalStartIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/gallery/${event.id}/gallery-images`);
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [event.id]);

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-gray-500">Loading gallery...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-gray-500">No images found for this event.</div>
      </div>
    );
  }

  const displayImages = images.slice(0, 4);
  const remainingCount = images.length > 4 ? images.length - 4 : 0;

  const handleImageClick = (index: number) => {
    setModalStartIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side: 2x2 Image Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-4">
            {displayImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleImageClick(index)}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={`/assets/gallery/${event.id}/${image}`}
                  alt={`${event.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay for "+X more" on the 4th image */}
                {index === 3 && remainingCount > 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-white text-3xl font-bold">
                      +{remainingCount} more
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right side: Event Information */}
          <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:w-1/3 bg-white rounded-lg shadow-lg p-6 lg:p-8 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold mb-2 text-yellow-400">
            {event.title}
          </h3>
          <p className="text-xl text-gray-600 mb-4 font-semibold">
            {event.subtitle}
          </p>
          {event.date && (
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
              {event.date}
            </p>
          )}
          <p className="text-gray-700 leading-relaxed mb-6">
            {event.description}
          </p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">
              {images.length} {images.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>
        </motion.div>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      <GalleryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      images={images}
      eventId={event.id}
      eventTitle={event.title}
      initialIndex={modalStartIndex}
    />
    </>
  );
};

const GalleryPage: React.FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Event Gallery | Cal Poly SOC - Cybersecurity Events & Community Photos</title>
        <meta name="description" content="Browse photos from Cal Poly SOC events, conferences, and activities. See our team in action at cybersecurity competitions, workshops, and community events at Cal Poly Pomona's Student Security Operations Center." />
        <meta name="keywords" content="Cal Poly SOC gallery, CalPolySoc events, CPP SOC photos, student cybersecurity events, Cal Poly Pomona SOC pictures, security competitions, cybersecurity conference, SOC activities" />
        <link rel="canonical" href="https://calpolysoc.org/gallery" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/gallery" />
        <meta property="og:title" content="Event Gallery | Cal Poly SOC" />
        <meta property="og:description" content="Browse photos from Cal Poly SOC events, conferences, and activities." />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calpolysoc.org/gallery" />
        <meta name="twitter:title" content="Event Gallery | Cal Poly SOC" />
        <meta name="twitter:description" content="Browse photos from Cal Poly SOC events and activities." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Event <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore photos from our events and activities throughout the years.
            </p>
          </motion.div>
        </div>

        {/* Gallery Events */}
        <div className="container mx-auto px-4 pb-16">
          {galleryEvents.map((event, index) => (
            <EventGallery key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;