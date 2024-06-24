

function Stats() {
  return (
    <div>
      <section className="mt-4">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 md:py-4 lg:px-8">
          {/* <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              A glance at our stats
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
              Let us look at the statistics of our work.
            </p>
          </div> */}

          <div className="mt-4 sm:mt-6">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Members
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  2000+
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Projects
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  95+
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Prize won
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
