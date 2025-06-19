
import { useEffect } from 'react';

export default function BookingWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="booking-widget max-w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/ge2HN52PHjWliZSbo6T9"
        style={{
          width: '100%',
          border: 'none',
          overflow: 'hidden',
          minHeight: '600px',
        }}
        scrolling="no"
        title="Bridal Appointment Booking"
        id="ge2HN52PHjWliZSbo6T9_1750196042723"
      />
    </div>
  );
}
