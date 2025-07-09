const MapSection = () => {
    return (
        <section className="w-full h-[450px] mt-8">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47702.411835874016!2d-3.7152472!3d40.4363503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e1!3m2!1sen!2slk!4v1752091603235!5m2!1sen!2slk"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </section>
    );
};

export default MapSection;
