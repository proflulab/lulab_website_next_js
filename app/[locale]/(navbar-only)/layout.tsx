

import Navbar from '@/components/navbar/navbar';


export default function NavbarOnlyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}