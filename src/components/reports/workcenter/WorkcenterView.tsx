import ButtonExport from "@components/Button/ButtonExport";
import SearchAndSelection from "@components/partial/SearchAndSelectionCollums";
import useWorkcenterQuery from "@services/reactQuery/report/WorkcenterReportQuery";
import useDebounce from "@utils/helpers/customHooks/useDebounce";
import { Divider, TableProps } from "antd";
import { useEffect, useState } from "react";
import { IPagination } from "types/api/params";
import { IWorkcenterReport } from "types/report/workcenter";
import { Sessions } from "types/Session";
import WorkcenterSection from "./WorkcenterSection";
import WorkcenterTable from "./WorkcenterTable";

const paginationDefault: IPagination = {
  pageSize: 10,
  current: 1,
  total: 0,
};

const tableRows = [
  "Customer",
  "PDO Dye",
  "SO Reff",
  "Item Name",
  "Item Color",
  "Lot",
  "Container",
  "Machine",
  "Workcenter",
  "Time Process",
  "Qty Roll",
  "Qty",
];

const workcenterType = ["", "PREPARATION", "DYE", "FINISH", "O.QC", "REDZONE"];

function WorkcenterView({ session }: { session: Sessions }) {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 600);
  const [selection, setSelection] = useState<number[]>([]);

  const [pagination, setPagination] = useState<IPagination>(paginationDefault);
  const [selected, setSelected] = useState<number>(0);

  const handlePaginationChange: TableProps<IWorkcenterReport>["onChange"] = (
    paginationProps,
    _filters
  ) => {
    console.log({ paginationProps });
    setPagination((prev) => ({ ...prev, ...paginationProps }));
    // setFilters(filters)
  };

  useEffect(() => {
    setPagination(paginationDefault);
  }, [debounceSearch]);

  const WorkcenterQuery = useWorkcenterQuery({
    session,
    workcenter: workcenterType[selected],
    search: debounceSearch,
    pagination,
    enabled: true,
  });

  const WorkcenterData = WorkcenterQuery.data?.data;

  return (
    <div>
      <WorkcenterSection
        data={WorkcenterData?.totalByWorkcenter ?? {}}
        selectedId={selected}
        setSelected={(n) => {
          setSelected(n);
          setPagination(paginationDefault);
        }}
      />
      <Divider />
      <SearchAndSelection
        placeholder="Search by Cust / PDO / SO PIL / Buffer"
        handleSelection={setSelection}
        handleSearch={setSearch}
        dataRows={tableRows}
        ButtonExport={(
          <ButtonExport
            disable={WorkcenterData?.total === 0}
            session={session}
            pdfApi=""
            excelAPI="/api/report/workcenter-export"
            params={{
              workcenter: workcenterType[selected],
              search: debounceSearch,
            }}
          />
        )}
      />
      <WorkcenterTable
        rowTablesSelected={selection}
        data={WorkcenterData?.data ?? []}
        handlePaginationChange={handlePaginationChange}
        pagination={{
          ...pagination,
          total: WorkcenterData?.total ?? 0,
        }}
        isLoading={WorkcenterQuery.isLoading}
      />
    </div>
  );
}

export default WorkcenterView;
