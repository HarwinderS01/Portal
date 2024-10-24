// app/layout.js
export const metadata = {
  title: 'Student Portal',
  description: 'Manage student information for New Generation High School',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
