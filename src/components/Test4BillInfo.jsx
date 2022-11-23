<div className="border overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.name}
                    </th>
                  ))}
                  {actions && actions.length && (
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only" />
                    </th>
                  )}
                </tr>
              </thead>
              {loading ? (
                renderLoader(columnCount)
              ) : (
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.length
                    ? renderTableBody(data, columns, actions)
                    : renderNoData(columnCount)}
                </tbody>
              )}
            </table></div>