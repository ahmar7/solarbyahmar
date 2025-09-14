// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: 'Overview',
        path: '/dashboard/overview',
        icon: getIcon('mdi-light:home'),
    },
    {
        title: 'Notifications',
        path: '/dashboard/notifications',
        icon: getIcon('ant-design:notification-outlined'),
        children: [
            { title: 'Notifications', path: '/dashboard/notifications' },
            { title: 'Subscriptions', path: '/dashboard/notifications/subscriptions' },
        ],
    },
    {
        title: 'Blockchains',
        path: '/dashboard/blockchains',
        icon: getIcon('tabler:box'),
    },
    {
        title: 'Virtual Accounts',
        path: '/dashboard/virtual_accounts',
        icon: getIcon('solar:dollar-outline'),
    },
    // {
    //   title: 'Faucets',
    //   path: '/dashboard/faucets',
    //   icon: getIcon('mdi:fuel-pump'),
    // },
    {
        title: 'Usage',
        path: '/dashboard/usage',
        icon: getIcon('fluent:data-usage-16-regular'),
    },
    {
        title: 'Error Logs',
        path: '/dashboard/error_logs',
        icon: getIcon('tabler:logs'),
    },
    {
        title: 'Documentation',
        path: '/dashboard/documentations',
        icon: getIcon('tabler:book'),
    },
    {
        title: 'Contact Support',
        path: '/dashboard/contact_support',
        icon: getIcon('fluent:contact-card-20-regular'),
    },
    // Uncomment if needed for authentication-related paths
    // {
    //   title: 'login',
    //   path: '/login',
    //   icon: getIcon('eva:lock-fill'),
    // },
    // {
    //   title: 'register',
    //   path: '/register',
    //   icon: getIcon('eva:person-add-fill'),
    // },
    // {
    //   title: 'Not found',
    //   path: '/404',
    //   icon: getIcon('eva:alert-triangle-fill'),
    // },
];

export default navConfig;
