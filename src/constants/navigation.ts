import { FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { ROUTES } from './routes';

export const ADMIN_MENU_ITEMS = [
  { name: 'Dashboard', href: ROUTES.ADMIN.DASHBOARD, icon: FiGrid },
  { name: 'Kuliner', href: ROUTES.ADMIN.KULINER, icon: MdOutlineRestaurant },
  { name: 'Berita', href: ROUTES.ADMIN.NEWS, icon: HiOutlineNewspaper },
  { name: 'Profil', href: ROUTES.ADMIN.PROFILE, icon: FiUser },
] as const;

export { FiLogOut };

export const USER_NAV_ITEMS = [
  { label: 'Beranda', href: ROUTES.USER.HOME },
  { label: 'Kuliner', href: ROUTES.USER.KULINER },
  { label: 'UMKM', href: ROUTES.USER.UMKM },
  { label: 'Event', href: ROUTES.USER.EVENT },
  { label: 'Fasilitas', href: ROUTES.USER.FASILITAS },
  { label: 'Tentang Kami', href: ROUTES.USER.ABOUT },
] as const;
