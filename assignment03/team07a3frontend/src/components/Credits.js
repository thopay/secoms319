import React from 'react';

const Credits = () => {

    return (
        <div class="bg-gray-100 min-h-screen">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div class="space-y-8">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Credits</h2>
                    <div class="bg-white shadow overflow-hidden sm:rounded-md">
                        <div class="divide-y divide-gray-200">
                            <div class="px-4 py-5 sm:px-6">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Created by
                                </h3>
                                <div class="mt-1 max-w-2xl space-y-2">
                                    <div class="flex flex-col sm:flex-row justify-between">
                                        <p class="text-sm text-gray-500">Thomas Payton</p>
                                        <p class="text-sm text-gray-500">
                                            <a href="mailto:email1@example.com" class="underline">tpayton@iastate.edu</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 max-w-2xl space-y-2">
                                    <div class="flex flex-col sm:flex-row justify-between">
                                        <p class="text-sm text-gray-500">Charles Dougherty</p>
                                        <p class="text-sm text-gray-500">
                                            <a href="mailto:email2@example.com" class="underline">cdough@iastate.edu</a>
                                        </p>
                                    </div>
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        Course Information
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        Course: COMS 319
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Course Name: Construction of User Interfaces
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Date: 4/30/2023
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Professor Name: Abraham Aldaco
                                    </p>
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        Project Description
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        This was a project created for assignment 03. In this project we use mongodb and mongoose to Create, View, Update, and Delete different items from a JSON that is stored on the mongo server. 

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        


    );
};

export default Credits;
