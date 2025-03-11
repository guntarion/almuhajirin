// src/app/components/shared/CommonBreadcrumb.tsx
// This component displays a breadcrumb navigation with page title and parent link

interface BreadcrumbProps {
  pageTitle: string;
  parent?: string;
}

const CommonBreadcrumb = ({ pageTitle, parent }: BreadcrumbProps) => {
  return (
    <div className='mb-6'>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>{pageTitle}</h2>
      {parent && (
        <div className='flex items-center text-sm mt-1'>
          <span className='text-gray-600 dark:text-gray-400'>{parent}</span>
          <span className='mx-2 text-gray-400'>/</span>
          <span className='text-blue-600 dark:text-blue-400'>{pageTitle}</span>
        </div>
      )}
    </div>
  );
};

export default CommonBreadcrumb;
