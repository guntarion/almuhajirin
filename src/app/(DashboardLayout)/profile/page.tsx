// src/app/(DashboardLayout)/profile/page.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { Button, Card, Label, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { IUser } from '@/models/User';
import { useRouter } from 'next/navigation';

/**
 * Profile page component
 * Allows users to view and edit their profile information
 */
const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  // Use a modified type for the form data where tanggalLahir is a string
  type FormDataType = Omit<Partial<IUser>, 'tanggalLahir'> & {
    tanggalLahir?: string;
  };

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    namaPanggilan: '',
    nomerHandphone: '',
    gender: undefined,
    tanggalLahir: undefined,
  });

  // Load user data into form when available
  useEffect(() => {
    if (user) {
      // Fetch the full user data from the API
      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/users/${user.id}`);
          if (response.ok) {
            const userData = await response.json();
            setFormData({
              name: userData.name || '',
              namaPanggilan: userData.namaPanggilan || '',
              nomerHandphone: userData.nomerHandphone || '',
              gender: userData.gender,
              tanggalLahir: userData.tanggalLahir ? new Date(userData.tanggalLahir).toISOString().split('T')[0] : undefined,
            });
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      setSuccess(false);
      setError('');

      // Prepare data for submission
      const dataToSubmit: Record<string, any> = { ...formData };

      // Convert date string to Date object for the API
      if (dataToSubmit.tanggalLahir) {
        dataToSubmit.tanggalLahir = new Date(dataToSubmit.tanggalLahir);
      }

      // Send update request to API
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      // Update was successful
      setSuccess(true);

      // Refresh the page to get updated user data
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className='flex justify-center items-center min-h-[70vh]'>
        <p>Please log in to view your profile</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>My Profile</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Profile Image Card */}
        <Card className='p-4'>
          <div className='flex flex-col items-center'>
            <div className='relative mb-4'>
              <Image
                src={user.image || '/images/profile/user-1.jpg'}
                alt={user.name || 'User'}
                height={150}
                width={150}
                className='rounded-full border-4 border-gray-100 shadow-lg'
              />
              <button
                className='absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md'
                title='Change profile picture'
                onClick={() => alert('Image upload functionality will be implemented soon')}
              >
                <Icon icon='solar:camera-outline' height={20} />
              </button>
            </div>
            <h2 className='text-xl font-semibold'>{user.name}</h2>
            <p className='text-gray-500'>{user.email}</p>
            <div className='mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800 capitalize'>{user.role}</div>
          </div>
        </Card>

        {/* Profile Form Card */}
        <Card className='p-4 md:col-span-2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Success Message */}
            {success && (
              <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg' role='alert'>
                <span className='font-medium'>Success!</span> Your profile has been updated.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg' role='alert'>
                <span className='font-medium'>Error!</span> {error}
              </div>
            )}

            {/* Name */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='name' value='Full Name' />
              </div>
              <TextInput id='name' name='name' value={formData.name} onChange={handleChange} required />
            </div>

            {/* Email (Read-only) */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Email' />
              </div>
              <TextInput id='email' value={user.email || ''} readOnly disabled />
              <p className='text-xs text-gray-500 mt-1'>Email cannot be changed</p>
            </div>

            {/* Nama Panggilan */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='namaPanggilan' value='Nama Panggilan' />
              </div>
              <TextInput
                id='namaPanggilan'
                name='namaPanggilan'
                value={formData.namaPanggilan || ''}
                onChange={handleChange}
                placeholder='Nama panggilan Anda'
              />
            </div>

            {/* Nomer Handphone */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='nomerHandphone' value='Nomer Handphone' />
              </div>
              <TextInput
                id='nomerHandphone'
                name='nomerHandphone'
                value={formData.nomerHandphone || ''}
                onChange={handleChange}
                placeholder='Contoh: 08123456789'
              />
            </div>

            {/* Gender */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='gender' value='Gender' />
              </div>
              <Select id='gender' name='gender' value={formData.gender || ''} onChange={handleChange}>
                <option value=''>Pilih Gender</option>
                <option value='lelaki'>Lelaki</option>
                <option value='perempuan'>Perempuan</option>
              </Select>
            </div>

            {/* Tanggal Lahir */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='tanggalLahir' value='Tanggal Lahir' />
              </div>
              <TextInput id='tanggalLahir' name='tanggalLahir' type='date' value={formData.tanggalLahir || ''} onChange={handleChange} />
            </div>

            {/* Submit Button */}
            <div className='flex justify-end'>
              <Button type='submit' disabled={loading} className='bg-primary hover:bg-primary-dark'>
                {loading ? (
                  <>
                    <Icon icon='eos-icons:loading' className='mr-2' />
                    Saving...
                  </>
                ) : (
                  <>
                    <Icon icon='solar:disk-outline' className='mr-2' />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
