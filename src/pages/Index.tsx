
import { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import VisualizerContainer from '@/components/SortingVisualizer/VisualizerContainer';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

const Index = () => {
  const scrollToAlgorithms = () => {
    document.getElementById('algorithms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold pb-3 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Sorting Algorithm Visualizer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Watch sorting algorithms in action. Understand how they work visually.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={scrollToAlgorithms} className="bg-blue-600 hover:bg-blue-700">
                  Explore Algorithms
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full"
              onClick={scrollToAlgorithms}
            >
              <ArrowDownIcon className="h-6 w-6" />
            </Button>
          </div>
        </section>
        
        {/* Visualizer section */}
        <section id="algorithms" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Visualize Sorting Algorithms
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Select an algorithm, adjust the array size and speed, then start the visualization.
                </p>
              </div>
              
              <VisualizerContainer />
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section id="about" className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    About Sorting Algorithms
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Sorting algorithms are methods for reorganizing a sequence of items in a specific order.
                    These algorithms are fundamental to computer science and have various applications.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Why Visualize?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Visual representation helps understand the inner workings of sorting algorithms.
                    It makes complex concepts more accessible and engaging.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold mb-2">Simple Sorting Algorithms</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Bubble Sort, Selection Sort, and Insertion Sort are easy to implement
                    but typically less efficient with time complexities of O(n²).
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold mb-2">Efficient Sorting Algorithms</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Merge Sort and Quick Sort use divide-and-conquer approaches
                    with better time complexities of O(n log n).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
