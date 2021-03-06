const id = "/:id";
const token = "/:token";

const root = '/';
const login = '/login';
const logout = '/logout';
const dashBoard = '/dashboard';
const showrooms = '/showroom';
const bookings = '/booking';
const packages = '/package';
const promotions = '/promotion';
const styles = '/style';
const profile = '/profile';
const setting = '/setting';


const managers = '/manager';
const manager = managers + id;

const consultants = '/consultant';
const consultant = consultants + id;

const additionalItems = '/additional-item';
const additionalItem = additionalItems + id;

const active = '/active';
const activeAccount = active + token;

const showroom = showrooms + id;
const booking = bookings + id;
const pkg = packages + id;

const RouteConstants = {
  root,
  login,
  logout,
  dashBoard,
  managers,
  consultants,
  consultant,
  showrooms,
  bookings,
  packages,
  promotions,
  styles,
  profile,
  manager,
  setting,
  active,
  additionalItem,
  additionalItems,
  showroom,
  booking,
  pkg
}

export default RouteConstants;