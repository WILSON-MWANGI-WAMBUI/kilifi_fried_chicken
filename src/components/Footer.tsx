const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10">
    <div className="container text-center">
      <p className="text-xl font-bold">
        Kilifi Fried Chicken
      </p>
      <p className="text-sm text-primary-foreground/60 mt-2">
        Kibaoni, Opposite Pwani University, Kilifi
      </p>
      <p className="text-sm text-primary-foreground/40 mt-4">
        © {new Date().getFullYear()} Kilifi Fried Chicken. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
