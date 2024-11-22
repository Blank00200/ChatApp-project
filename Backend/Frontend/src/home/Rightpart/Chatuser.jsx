import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  
  // Ensure selectedConversation is an object and has the fullname property
  const userFullName = selectedConversation ? selectedConversation.fullname : 'Unknown User';
  
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className="w-16 rounded-full">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAaVBMVEX///8jHyAAAAAhHyCWlpYNBQcQCgyEgoQgHB0kHiAnJicdGBn19PSIhofv7+8aFRbl5eVZWVnT09NramqSkJG4uLjb2trNzc1IRkc0MzTGxcavr69NTU09OzxkY2RDQEGnpqd5eXlzcXL7vDi/AAAEcklEQVR4nO2c25KiMBBApSExGCGIgHIR0f//yAXUVcfBycUOUzU5DzsvY9Uxl06nO7OLhcPhcDgcjr/Fusi7LFpGQZcXc7vciHfRAYAQ2kMIAbIP0nhuqUUaHQG490AoAJogmdWqaoA+SV0RBLbpbFbpGWj4jdUIgeU8YxZnQCec/B4vpKRb29cqGpgaqhsMWusboBbiJ61+3GhZWdaC75b7KwKsimX9HE6u+C9zWdvT6n5cWo9i+W/U6sWoJbECmIqXx8FKIEuOckv+jtjYCBdbpVkcgSW+VqWu1YvtsLXiveosDogG+0TqQC5uPeF76FGMqO3FKyFnuFq1zuoaQB6wjc7qGhAbTK2UMV/Pi3HMLRmAp+nlQYboVQpf14t7eFpxP1y6Xh7iKVkZeIWIOzIiuoPVQ09oXluJnH4S0WJprTcmXnyPle3EjW5UHWAHrJJKctQ6HG9eKzSvg9F4rbAqFsnBaLw8NC/DecTyMlz3Jdb6WmtnOQP8gHYQGcVV3qDd1ozOIbx4b3RueyRC8zLLcxDLFCU38EK8Qmb6ebQ44mktUqEdWaFD9NLPdPBO7RHtey1itjqiWJP7DyC3P2qdukkfvPCC6gW9s5sJ9AKYTl0uRL1sX2nVD0kB+FqLWLnu66HWTP6Tqu5JCGxo9Xtyqr83obW1o3VpD0lDNva6kJG8GKAWCr8SyK4xaO32bGsmc4IzipekTlCIn+eS2uvxPZCRN0MWer6A0zzvO3ZHmDbjsJpjsC7km4m3ChQai/3jV9bVFoDyx83JOAVoqxmeTnwhPzUeAAwPh0j/c9Wc8vmlRuKi6qLztt2esroq5n/M5HD8DYpK69qc5Dle1yqpzjBwUo1OxWH83LnCiCDp8gjjTYhBozZmgRjPKkbgGH24SBHnZX/a3G7aQqVll7T3FJIT2H/ygMqbp8Qh7K8SslNSlfc0LQyH79R+6tK2O7ymM5QGMt+7H6yXy2Zv9pE9EH2b/jGJRGadrb69m0NpnpntyqkXJgLK+t1sJpGY+iiHs+Eqe/vskr/ZYPmZAfOnalIhaYzmMvrh2SUn1I+q5PnLx0m97bOx9xc5ujJY/jLXV9ZngptlUOe7NE2rvMtOezH5EPgBoS92krpVhx4XdHzlfoXLXXmFr/m0NVAqWfpPP6TE9ErUNdGqpCogDhoHZuKbNBvlIGd1r71akUsP9SZIhz6LA4wphrFEvxGkBFWsJcqFiA+g9g6+YHaGa+jGq3hlJo1sNYhCbpEwZmPVj1CFsnAHkn+N8AlAPuqrdzQMINKdycK3teoH2Ep2Ijt7q35AyK78s40j6A6RbALGpc3lNTydlpvIwlasv8K4XLqTW/aS/SsLpW7ZR7w6Ka/W7rKXjmBGry51EI2UV2kzqg6wUspr9Tu91va9pE6i3+oVOy/nheg1x7qXObidl/P6i14uTty9JLRueY6vg6rR5TOS+Ze12tcNkHuMlTRAFKGXf6V5+FVCQLonk3aBDtFSluiBwPJ/6eFwOBwOh+PT/AOnWU7U8Co8AAAAAABJRU5ErkJggg==" alt="User Avatar" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">{userFullName}</h1>
        <span className="text-sm">Offline</span>
      </div>
    </div>
    </div>
  );
}

export default Chatuser;
