// Import your Client Component
import ProfilePage from './profile-page'

import profileService from '@/lib/profile-service'
import { ProfileData } from '@/interfaces'

const getData = async () => {
  return {
    about: await profileService.getAboutData(),
    services: await profileService.getServicesData()
  }
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const data: ProfileData = await getData()
  // Forward fetched data to your Client Component
  return <ProfilePage data={data} />
}