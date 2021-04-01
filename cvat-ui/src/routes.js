import MainPage from './pages/main/Main';
import MemberPage from './pages/member/Member';
import HostPage from './pages/host/Host';
import TagPage from './pages/tag/TagPage';

const routes = [
    {
        path: '/',
        name: '메인페이지',
        component: MainPage,
    },
    {
        path: '/host',
        name: 'Host',
        component: HostPage,
    },
    {
        path: '/member',
        name: 'Member',
        component: MemberPage,
    },
    {
        path: '/tag',
        name: 'Tag',
        component: TagPage,
    },
];

export default routes;
