import React from 'react';
import { ExternalLinkIcon, GoogleIcon, CourseraIcon, CredlyIcon } from './IconComponents';

const credentialsLinks = [
    {
        platform: 'Cloud Skills Boost',
        url: 'https://www.cloudskillsboost.google/public_profiles/cf97ee7a-dc09-44a0-aea8-af1961e3d424',
        icon: GoogleIcon,
        label: 'View Public Profile'
    },
    {
        platform: 'Credly',
        url: 'https://www.credly.com/badges/9f7423f1-757d-4d0a-ab77-1b86ac633094/public_url',
        icon: CredlyIcon,
        label: 'View Verified Badge'
    },
    {
        platform: 'Coursera',
        // Using a representative certificate link as a direct entry point to accomplishments.
        url: 'https://coursera.org/share/dedc2823ae028a891f31c45bff5e9d90',
        icon: CourseraIcon,
        label: 'View Certificate Example'
    }
];

const Credentials = () => {
    return (
        <section id="credentials" className="py-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
                <span className="text-red-500 font-mono text-2xl">04.</span> Credentials & Verifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {credentialsLinks.map(link => (
                    <div key={link.platform} className="group bg-gray-900/60 backdrop-blur-sm p-8 rounded-md border border-gray-700/50 flex flex-col items-center text-center transition-all duration-300 hover:border-red-500/50 hover:-translate-y-1">
                        <link.icon className="w-16 h-16 mb-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-100 mb-4 h-14 flex items-center">{link.platform}</h3>
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center bg-gray-800 text-gray-300 font-semibold py-2 px-5 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            {link.label}
                            <ExternalLinkIcon className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Credentials;