import type { Profile } from '../types';

interface FooterProps {
  profile: Profile;
}

function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-10 border-t border-violet-500/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Conéctate conmigo</p>

        {/* Iconos de Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* LinkedIn */}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-violet-400 transition duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.535-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          {/* GitHub */}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.828-.26.828-.577 0-.285-.011-1.04-.017-2.04-3.335.724-4.041-1.61-4.041-1.61-.545-1.385-1.325-1.756-1.325-1.756-1.085-.745.082-.73.082-.73 1.2.083 1.838 1.233 1.838 1.233 1.066 1.83 2.802 1.3 3.493.993.109-.775.421-1.3.766-1.597-2.665-.3-5.466-1.334-5.466-5.93 0-1.309.467-2.376 1.233-3.22-.124-.3-.535-1.52.117-3.175 0 0 1.008-.322 3.3.738.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.06 3.3-738 3.3-.738.652 1.655.241 2.875.118 3.175.766.844 1.232 1.911 1.232 3.22 0 4.595-2.809 5.62-5.474 5.92-.41.355-.788 1.054-.788 2.118 0 1.532.008 2.76.008 3.136 0 .319.225.694.834.576C20.565 21.804 24 17.309 24 12c0-6.627-5.373-12-12-12z" /></svg>
          </a>
          {/* Email */}
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-gray-400 hover:text-violet-400 transition duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.758-11.724c.755-.387 1.644-.616 2.589-.616h16.299c.945 0 1.834.229 2.589.616l-11.759 11.724zm0 2.586l11.759-11.724v16.425c0 1.657-1.343 3-3 3h-17.589c-1.657 0-3-1.343-3-3v-16.425l11.758 11.724z" /></svg>
          </a>
        </div>

        <p className="text-sm text-slate-400">
          &copy; <span id="current-year">{currentYear}</span> {profile.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;