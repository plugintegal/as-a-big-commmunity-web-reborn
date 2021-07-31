import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="animate-pules">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-blue-400 h-4 w-4"></div>
              <div class="rounded-full bg-blue-400 h-4 w-4"></div>
              <div class="rounded-full bg-blue-400 h-4 w-4"></div>
            </div>
          </div>
        </div>
    )
}

export default Loading