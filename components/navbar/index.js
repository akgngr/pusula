import React from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Dropdown from '../dropdown/index';

export default function Navbar({ fixed }) {
  const menu = [
    {
      name: 'Anasayfa',
      url: '/',
    },
    {
      name: 'Kurumsal',
      url: '#',
      dropdown: [
        {
          name: 'Hakkımızda',
          url: '/hakkimizda',
        },
        {
          name: 'Rehberlik Servisimiz',
          url: '/rehberlik-servisi',
        },
        {
          name: 'Misyon ve Vizyon',
          url: '/misyon-vizyon',
        },
        {
          name: 'Kurucumuzun Mesajı',
          url: '/kurucu-mesaji',
        },
      ],
    },
    {
      name: 'Şubelerimiz',
      url: '/subelerimiz',
      dropdown: [
        {
          name: 'Okyanus Şubesi',
          url: '/subelerimiz/okyonus',
        },
        {
          name: 'Güneş Şubesi',
          url: '/subelerimiz/gunes',
        },
      ],
    },
    {
      name: 'Kurslarımız',
      url: '/kurslarimiz',
    },
    {
      name: 'İnsan Kaynakları',
      url: '/is-basvurusu',
    },
    {
      name: 'Duyurular',
      url: '/duyurular',
    },
    {
      name: 'İletişim',
      url: '/iletisim',
    },
  ];

  const listMenu = menu.map((m, index) => {
    return m.dropdown ? (
      <Dropdown key={index} name={m.name} data={m.dropdown} />
    ) : (
      <li className="nav-item inline-flex px-4 py-2 text-sm font-medium" key={index}>
        <Link href={m.url}>
          <a className="capitalize text-white hover:opacity-75">{m.name}</a>
        </Link>
      </li>
    );
  });
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-3 bg-gray-800 z-40">
        <div className="w-full flex flex-wrap justify-between items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
            <button
              className="text-white ml-auto cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={'lg:flex w-full items-center' + (navbarOpen ? ' flex' : ' hidden')}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none">{listMenu}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
