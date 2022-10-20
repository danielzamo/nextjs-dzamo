import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <meta
          name='description'
          content='Ansible, RHEL, Debian, Proxmox, Git.'
        />
              <meta
          name='description'
          content='DHCP, TCP/IP, DNS, HTTP, SNMP, SMTP.'
        />
              <meta
          name='description'
          content='Daniel Oscar Zamo.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}