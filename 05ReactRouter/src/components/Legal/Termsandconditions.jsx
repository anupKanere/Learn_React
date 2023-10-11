import React from 'react';

const TermsAndConditions = () => {
  const terms = [
    {
      title: 'PG Rental Agreement',
      description:
        'A legally binding contract outlining the terms and conditions of the rental arrangement between the landlord (PG owner) and the tenant (paying guest).',
    },
    {
      title: 'House Rules',
      description:
        'Specifies rules and regulations that guests must follow during their stay, including quiet hours, smoking policies, and guests\' responsibilities.',
    },
    {
      title: 'Rent and Payment Terms',
      description:
        'Clarifies the rent amount, due date, and payment methods. Outlines any penalties for late payments or bounced checks.',
    },
    {
      title: 'Notice Period for Termination',
      description:
        'Outlines the notice period required for both the landlord and tenant to terminate the rental agreement.',
    },
    {
      title: 'Utilities and Amenities',
      description:
        'Details which utilities and amenities are included in the rent (e.g., electricity, water, internet) and which are the tenant\'s responsibility.',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              className="rounded-2xl"
              src="https://www.lemontreehotels.com/Images/slider/29_34_2023_03_34_00Facade.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-serif md:text-4xl">
              Terms and Conditions
            </h2>
            <ul className="mt-6 text-gray-600">
              {terms.map((term, index) => (
                <li key={index}>
                  <strong>{term.title}:</strong> {term.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
