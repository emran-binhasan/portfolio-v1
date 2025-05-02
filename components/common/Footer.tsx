const Footer = () => {
    return (
      <footer className="py-3 border-t">
        <p
          className="mx-auto w-full max-w-4xl text-center font-anek  text-base font-medium text-neutral-600 sm:text-lg lg:text-xl"
        >
          &copy; {new Date().getFullYear()} Emran Bin Hasan. All rights reserved.
        </p>
      </footer>
    );
  };

  export default Footer;