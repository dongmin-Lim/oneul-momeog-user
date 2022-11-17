export const ROUTES = {
  HOME: "/",
  USER: {
    LOGIN: "/login",
    ADDRESS: "/address",
    KAKAO: "/api/auth/oauth/login/kakao",
    NAVER: "/api/auth/oauth/login/naver",
    MAIN: "/main",
    CHAT: "/chat/:roomId",
    RESTAURANTS: "/restaurants/:restaurantId",
    REVIEW: "/restaurants/review",
    PAY: "/restaurants/pay",
    PAYCOMPLETE: "/restaurants/paycomplete",
  },
  CEO: {
    LOGIN: "/ceo/login",
    REGISTER: "/ceo/register",
  },
};
