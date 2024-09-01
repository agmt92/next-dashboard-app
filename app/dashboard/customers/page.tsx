import { Metadata } from 'next';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { fetchCustomers } from '@/app/lib/data';
import { Customer } from '@/app/lib/definitions';
import Search from '@/app/ui/search';


export const metadata: Metadata = {
  title: 'Customers',
};

async function CustomersContent() {
  const customers: Customer[] = await fetchCustomers();
  return <CustomersTable customers={customers} />;
}

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-90vw flex-col space-y-2.5 p-4 md:-mt-32">
        <Suspense fallback={<CustomersTableSkeleton />}>
          <CustomersContent />
        </Suspense>
      </div>
    </main>
  );
}