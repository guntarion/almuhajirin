// src/app/(DashboardLayout)/users/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import CommonBreadcrumb from '@/app/components/shared/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/shared/CommonCardHeader';
import { useAuth } from '@/hooks/useAuth';
import RoleGuard from '@/Components/auth/RoleGuard';
import { Button, Label, Modal, Select, Spinner, Table } from 'flowbite-react';

/**
 * User management page for administrators
 * Displays list of users and allows role changes
 */
const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [updating, setUpdating] = useState(false);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Invalid data format:', data);
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle role change submission
  const handleRoleChange = async () => {
    if (!selectedUser || !newRole) return;

    setUpdating(true);
    try {
      const response = await fetch(`/api/users/${selectedUser._id}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        const updatedUser = await response.json();

        // Update users list with the new role
        setUsers(users.map((user) => (user._id === updatedUser._id ? updatedUser : user)));

        // Close modal and reset state
        setShowModal(false);
        setSelectedUser(null);
        setNewRole('');
      } else {
        console.error('Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating user role:', error);
    } finally {
      setUpdating(false);
    }
  };

  // Open modal to change role
  const openRoleModal = (user: any) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setShowModal(true);
  };

  return (
    <RoleGuard allowedRoles={['admin']}>
      <CommonBreadcrumb pageTitle='User Management' parent='Administration' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader heading='Users' subHeading={[{ text: 'Manage user roles and permissions' }]} />
              <div className='p-6'>
                {loading ? (
                  <div className='flex justify-center p-4'>
                    <Spinner size='xl' />
                  </div>
                ) : users.length === 0 ? (
                  <div className='p-4 text-center text-gray-500'>No users found or error loading users. Please try again later.</div>
                ) : (
                  <Table>
                    <Table.Head>
                      <Table.HeadCell>Name</Table.HeadCell>
                      <Table.HeadCell>Email</Table.HeadCell>
                      <Table.HeadCell>Role</Table.HeadCell>
                      <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='divide-y'>
                      {users.map((user) => (
                        <Table.Row key={user._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>{user.name}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                          <Table.Cell>
                            <span className='px-2 py-1 rounded-full text-xs font-medium capitalize bg-blue-100 text-blue-800'>{user.role}</span>
                          </Table.Cell>
                          <Table.Cell>
                            <Button size='xs' color='light' onClick={() => openRoleModal(user)}>
                              Change Role
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Change Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Change User Role</Modal.Header>
        <Modal.Body>
          <div className='space-y-4'>
            <p>
              Update role for <span className='font-medium'>{selectedUser?.name}</span>
            </p>
            <div>
              <Label htmlFor='role' value='Select role' />
              <Select id='role' value={newRole} onChange={(e) => setNewRole(e.target.value)} className='mt-1'>
                <option value='admin'>Admin</option>
                <option value='moderator'>Moderator</option>
                <option value='editor'>Editor</option>
                <option value='member'>Member</option>
                <option value='viewer'>Viewer</option>
                <option value='guest'>Guest</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='gray' onClick={() => setShowModal(false)} disabled={updating}>
            Cancel
          </Button>
          <Button color='primary' onClick={handleRoleChange} disabled={updating}>
            {updating ? (
              <>
                <Spinner size='sm' className='mr-2' />
                Updating...
              </>
            ) : (
              'Update Role'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </RoleGuard>
  );
};

export default UsersPage;
