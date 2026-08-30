function Profile() {
    return ( 
        <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-1/3 bg-gray-200 p-6">
                Profile Image
            </div>
            <div className="w-full md:w-2/3 bg-gray-100 p-6">
                Profile Details
            </div>
        </div>
     );
}

export default Profile;