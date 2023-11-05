import getNodes
import networkx as nx

map = getNodes.final_map

nodesAndEdges = []

for node, edges in map.items():
    for edge in edges:
        nodesAndEdges.append((node, edge))

Graph = nx.Graph()

Graph.add_edges_from(nodesAndEdges)